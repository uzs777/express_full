import { isValidObjectId } from "mongoose";
import { catchAsync } from "../middlewares/async-tyrcech.js";
import { ApiError } from "../utils/custum-error.js";
import { successRes } from "../utils/success-res.js";

export class BaseController {
    constructor(model, relation) {
        this.model = model;
        this.relation = relation
    }

    create = catchAsync(async (req, res) => {
        const data = await this.model.create(req.body);
        return successRes(res, data, 201)
    });

    findAll = catchAsync(async (req, res) => {
        const data = await this.model.find().populate(this.relation);
        return successRes(res, data)
    });

    findById = catchAsync(async (req, res) => {
        const data = await this._getById(req.params?.id);
        return successRes(res, data)
    })

    update = catchAsync(async (req, res) => {
        const { id } = req.params?.id;
        await this._getById(id)
        const update = this.model.findByIdAndUpdate(id, req.body, { new: true });
        return successRes(res, update)
    })

    delate = catchAsync(async (req, res) => {
        const { id } = req.params?.id;
        await this._getById(id)
        const delat = this.model.findByIdAndDelete(id);
        return successRes(res, delat)
    })

    async _getById(id) {
        if (!isValidObjectId(id)) {
            throw new ApiError("Invalid Object ID", 400);
        }
        const data = await this.model.findById(id).populate(this.relation);
        if (!data) {
            throw new ApiError("not found", 404);
        }
        return data
    }

    async _isExist(property, message) {
        const exists = await this.model.findOne(property)
        if (exists) {
            throw new ApiError(`${message} already exists`, 409)
        }
    }

    async _ExistId(id, property, message) {
        const existsData = await this.model.findOne(property);
        if (existsData && existsData.id != id) {
            throw new ApiError(`${message} exists`, 409)
        }
    }
}
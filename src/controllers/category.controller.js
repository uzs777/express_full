import { catchAsync } from "../middlewares/async-tyrcech.js";
import Category from "../model/category.js";
import { ApiError } from "../utils/custum-error.js"
import { successRes } from "../utils/success-res.js"
import { BaseController } from "./base.controller.js";

class categoryController extends BaseController {
    create = catchAsync(async (req, res) => {
        const name = await Category.findOne({ name: req.body?.name });
        if (name) {
            throw new ApiError("name exists", 409)
        }
        const category = Category.create(req.body);
        return successRes(res, category)
    })

    update = catchAsync(async (req, res) => {
        const id = req.params?.id;
        await this._getById(id)
        const { name } = req.body
        if (name) {
            await this._ExistId(id,{name},"name")
        }
        const newData = await Category.findByIdAndUpdate(id, req.body, { new: true })
        return successRes(res, newData)
    })
}
export default new categoryController(Category, "products")
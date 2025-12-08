import { BaseController } from "./base.controller.js";
import Admin from "../model/users.js"
import { catchAsync } from "../middlewares/async-tyrcech.js";
import hashedData from "../utils/hashed-data.js";
import { Roles } from "../enums/users-enums.js";
import { successRes } from "../utils/success-res.js";

class adminController extends BaseController {
    create = catchAsync(async (req, res) => {
        const { phoneNumber, email, password } = req.body;
        await this._isExist({ phoneNumber }, "Phone number");
        await this._isExist({ email }, "email name");
        const hashedPassword = await hashedData.decode(password)
        delete req.body?.password;
        const newAdmin = await Admin.create({
            hashedPassword,
            role: Roles.ADMIN,
            ...req.body
        });
        return successRes(res, newAdmin)
    })
}

export default new adminController(Admin)
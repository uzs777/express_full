import { catchAsync } from "../middlewares/async-tyrcech.js";
import User from "../model/users.js"
import { ApiError } from "../utils/custum-error.js";
import hashedData from "../utils/hashed-data.js";
import { successRes } from "../utils/success-res.js";
import token from "../utils/token.js";

class AuthController {
    signIn = catchAsync(async (req, res) => {
        const { phoneNumber, password } = req.body;
        const user = await User.findOne({ phoneNumber })
        const isMatchPass = await hashedData.encode(password, user?.hashedPassword || '')
        if (!user || !isMatchPass) {
            throw new ApiError('Phone number or password invalid ', 400);
        }
        const paylod = { id: user._id, role: user.role }
        const accessToken = token.getAccess(paylod);
        const refreshToken = token.getRefreshToken(paylod, res);
        return successRes(res, {
            user,
            accessToken,
            refreshToken
        });
    });

    getAccessToken = catchAsync(async (req, res) => {
        const refreshToken = req.cookies?.refreshToken;
        if (!refreshToken) {
            throw new ApiError("Please sign in firstly", 401);
        }
        const data = token.verifyRefresh(refreshToken)
        if (!data) {
            throw new ApiError('Something went wrong. Please sign in again', 401);
        }
        const user = await User.findById(data?.id);
        if (!user) {
            throw new ApiError('Your data is not found', 400);
        }
        const payload = { id: user._id, role: user.role };
        const accessToken = token.getAccess(payload);
        return successRes(res, {
            token: accessToken
        });
    })

}

export default new AuthController()
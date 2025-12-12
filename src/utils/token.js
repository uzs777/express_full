import jwt from "jsonwebtoken";
import { envConfig } from "../config/index.js"

class Token {
    getAccess(payload) {
        const accessToken = jwt.sign(payload, envConfig.ACCESSTOKEN.KEY, {
            expiresIn: envConfig.ACCESSTOKEN.TIME
        });
        return accessToken;
    }
    getRefreshToken(payload, res) {
        const refreshToken = jwt.sign(payload, envConfig.REFRESHTOKEN.KEY, {
            expiresIn: envConfig.REFRESHTOKEN.TIME
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: false,
            maxAge: 30 * 24 * 60 * 60 * 1000
        });
        return refreshToken
    }

    verifyAccess(token) {
        const isCorrect = jwt.verify(token, envConfig.ACCESSTOKEN.KEY);
        return isCorrect
    }

    verifyRefresh(token) {
        const isCorrect = jwt.verify(token, envConfig.REFRESHTOKEN.KEY);
        return isCorrect
    }
}


export default new Token()
import { ApiError } from "../utils/custum-error.js";

export function validator(schema) {
    return function (req, res, next) {
        try {
            const { error } = schema(req.body);
            if (error) {
                throw new ApiError(error.details[0]?.message, 422);
            }
            return next();
        } catch (error) {
            return next()
        }
    }
}
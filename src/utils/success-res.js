export function successRes(res, data, satusCode = 200) {
    return res.status(satusCode).json({
        satusCode,
        message: "success",
        data
    });
}
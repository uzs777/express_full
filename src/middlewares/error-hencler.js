export function errorHandle(err, req, res, next) {
    if (!err?.statuCode) {
        console.log("tvar", err);
    }
    const statuCode = err?.statuCode || 500;
    const message = err?.message || "internel server error";
    return res.status(statuCode).json({
        statuCode,
        message
    });
}
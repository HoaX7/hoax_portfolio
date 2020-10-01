module.exports.error = (code, message) => {
    const res = this;
    return res.status(code).send({
        error: true,
        message: message || "server error"
    })
}
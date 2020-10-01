module.exports.unauthorized = () => {
    const res = this;
    return res.status(401).send({
        error: true,
        message: "Unauthorized"
    })
}
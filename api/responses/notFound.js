module.exports.notFound = (message) => {
    const res = this;
    return res.status(404).send({
        error: true,
        message: message || "Not found"
    })
}
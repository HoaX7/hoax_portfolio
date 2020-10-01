module.exports.success = (data, metadata = {}) => {
    const res = this;
    return res.status(200).send({
        success: true,
        data,
        metadata
    })
}
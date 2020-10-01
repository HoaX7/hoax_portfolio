const mongoose = require("mongoose");

var detailSchema = new mongoose.Schema({
    userid: {
        type: "string",
        required: true
    }
}, { strict: false });
var details = mongoose.model('details', detailSchema);

module.exports = details;
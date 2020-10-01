const mongoose = require("mongoose");

var profileSchema = new mongoose.Schema({
    userid: {
        type: "string",
        required: true
    }
}, { strict: false });
var profiles = mongoose.model('profiles', profileSchema);

module.exports = profiles;
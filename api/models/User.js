const mongoose = require("mongoose");


const User = new mongoose.Schema({
    email: { type: String, require: true },
    name: { type: String, require: true },
    surname: { type: String, require: true },
    password: { type: String, require: true },
    roles: { type: String, default: 'User' },

});

module.exports = mongoose.model('User', User);

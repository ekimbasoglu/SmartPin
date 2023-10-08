// Contact.js
const mongoose = require("mongoose");

const Contact = new mongoose.Schema({
    name: { type: String, default: '', required: true },
    email: { type: String, default: '', required: true },
    message: { type: String, default: '', required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', Contact);


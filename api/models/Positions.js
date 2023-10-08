const mongoose = require("mongoose");

const Position = new mongoose.Schema({
    name: { type: String, default: '' },
});

module.exports = mongoose.model('Position', Position);


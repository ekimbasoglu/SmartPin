const mongoose = require("mongoose");


const Pomodoro = new mongoose.Schema({
    duration: { type: Number, default: 0 }, // Based on seconds 
    timestamp: { type: Date, default: Date.now },
    hasfinished: { type: Boolean, default: false }, // if it's not true user cannot start another pomodoro
});

module.exports = mongoose.model('Pomodoro', Pomodoro);

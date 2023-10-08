const mongoose = require("mongoose");
const Positions = require("./Positions");

const Job = new mongoose.Schema({
    company: { type: String, default: '' },
    stage: { type: String, default: 'Applied' },
    position: { type: String, default: Positions },
    applicationDate: { type: Date, default: Date.now },
    additionalNotes: { type: String, default: '' },
    postingUrl: { type: String, default: '' },
    location: { type: String, default: '' },
});

module.exports = mongoose.model('Job', Job);


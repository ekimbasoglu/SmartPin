const mongoose = require("mongoose");

const Map = new mongoose.Schema({
    propertyId: {
        type: Number,
        required: true,
    },
    lng: {
        type: Number,
        required: true,
    },
    lat: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    amenities: {
        type: String,
    },
    startingPrice: {
        type: String,
    },
});

module.exports = mongoose.model('Map', Map);


const { Router } = require('express');
const app = Router();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const Map = require('../models/Map');

// Get all the maps
exports.getMaps = async (req, res) => {
    try {
        const mapData = await Map.find({});
        return res.status(200).json(mapData);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
exports.getMap = async (req, res) => {
    const propertyId = req.params.propertyId;
    if (!propertyId) {
        return res.status(400).json({ 'error': 'Missing fields' });
    }

    try {
        const mapData = await Map.find({ propertyId: propertyId });
        return res.status(200).json(mapData);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.addMap = async (req, res) => {

    if (!req.body.lng || !req.body.lat || !req.body.name || !req.body.price || !req.body.address || !req.body.state || !req.body.amenities || !req.body.startingPrice || !req.body.propertyId) {
        return res.status(400).json({
            error: 'Missing fields'
        });
    }
    const map = {
        lng: req.body.lng,
        lat: req.body.lat,
        name: req.body.name,
        price: req.body.price,
        address: req.body.address,
        state: req.body.state,
        amenities: req.body.amenities,
        startingPrice: req.body.startingPrice,
        propertyId: req.body.propertyId,
    };
    try {
        const newMap = new Map(map);
        await newMap.save();

        res.status(201).json(newMap);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

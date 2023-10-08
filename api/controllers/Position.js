const { Router } = require('express');
const Position = require('../models/Position');
const app = Router();
require('dotenv').config();

exports.create = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        res.status(400).json({ message: 'Name is missing' });
    }

    const newPosition = new Position({ name });
    newPosition.save((err, position) => {
        if (err) {
            res.status(500).json({ message: 'Server error' });
        }
        res.status(200).json({ position: position });
    });
};
exports.delete = async (req, res) => {
    const { _id } = req.body;

    if (!_id) {
        res.status(400).json({ message: 'ID is missing' });
    }

    Position.deleteOne({ _id }, (err, position) => {
        if (err) {
            res.status(500).json({ message: 'Server error' });
        }
        res.status(200).json({ position: position });
    });
};

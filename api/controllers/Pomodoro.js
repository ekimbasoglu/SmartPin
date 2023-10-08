const { Router } = require('express');
const Pomodoro = require('../models/Pomodoro');
const app = Router();
require('dotenv').config();

exports.getAll = async (req, res) => {
    // Get all pomodoros
    const pomodoros = await Pomodoro.find();

    if (!pomodoros) {
        res.status(400).json({ message: 'There is no pomodoro' });
    }

    res.send(pomodoros);
};
exports.start = async (req, res) => {
    // Check if there is a unfinished pomodoro
    const unfinishedPomodoro = await Pomodoro.findOne({ hasfinished: false });
    if (unfinishedPomodoro) {
        res.status(400).json({ message: 'There is a unfinished pomodoro' });
    }

    const pomodoro = new Pomodoro({
        duration,
        timestamp: Date.now(),
        hasfinished: false,
    });
    await pomodoro.save();
    res.send(pomodoro);

};
exports.finish = async (req, res) => {
    // Find the unfinished pomodoro and update it with finished
    const unfinishedPomodoro = await Pomodoro.findOne({ hasfinished: false });
    if (!unfinishedPomodoro) {
        res.status(400).json({ message: 'There is no unfinished pomodoro' });
    }
    // Update the unfinishedPomodoro with finished
    unfinishedPomodoro.hasfinished = true;
    await unfinishedPomodoro.save();
    res.send(unfinishedPomodoro);
};

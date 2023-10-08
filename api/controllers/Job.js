const { Router } = require('express');
const app = Router();
require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.getAll = async (req, res) => {
    const jobs = await Job.find();

    if (!jobs) {
        res.status(400).json({ message: 'There is no jobs' });
    }
    res.status(200).send(jobs);
};
exports.get = async (req, res) => {
    const { company } = req.params;

    if (!company) {
        res.status(400).json({ message: 'Invalid company name' });
    }
    const job = await Job.findOne({ company: company });

    if (!job) {
        res.status(400).json({ message: 'Job doesnt exist' });
    }
    res.status(200).send(job);
};

exports.create = async (req, res) => {
    const { company, stage, position, applicationDate, additionalNotes, postingUrl, location } = req.body;
    if (!company || !stage || !position || !applicationDate || !additionalNotes || !postingUrl || !location) {
        res.status(400).json({ message: 'Invalid information' });
    }
    const job = new Job({ company, stage, position, applicationDate, additionalNotes, postingUrl, location });
    await job.save();
    res.status(200).send(job);
};

exports.delete = async (req, res) => {
    // Delete a job application based on company name from the database
    const { company } = req.params;
    if (!company) {
        res.status(400).json({ message: 'Invalid company name' });
    }
    // Delete that job application
    const job = await Job.findOneAndDelete({ company: company });
    if (!job) {
        res.status(400).json({ message: 'Job doesnt exist' });
    }
    res.status(200).send(job);
};

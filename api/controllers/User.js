const { Router } = require('express');
const app = Router();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Contact = require('../models/Contact');

exports.getToken = async (req, res) => {
    const { password } = req.body;
    if (!password) {
        res.status(401).json({ message: 'Invalid credentials' });
    }

    if (password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ password }, process.env.JWT_SECRET);
        res.status(200).json({ token: token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }

};
exports.register = async (req, res) => {
    const email = req.body.email,
        name = req.body.name,
        surname = req.body.surname,
        password = req.body.password;

    //Missing fields
    if (!email || !name || !surname || !password) {
        return res.status(400).send('Field is missing');
    }

    var hashedPassword; // undef
    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(password, salt);

    User.findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                return res.status(400).send('User is already created');
            } else {
                const user = {
                    email,
                    name,
                    surname,
                    password: hashedPassword,
                };
                const newUser = new User(user);
                newUser.save();
                const token = jwt.sign({ user }, process.env.SECRET); // Generate a token
                return res.status(200).send('User successfuly created');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};


exports.login = function (req, res) {
    const email = req.body.email,
        password = req.body.password;

    //Missing fields
    if (!email || !password) {
        return res.status(400).send('Field is missing');
    }

    User.findOne({ email: req.body.email })
        .then(async (user) => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        return res.status(400).send('Something is wrong!');
                    } else if (result) {
                        const token = jwt.sign({ user }, process.env.SECRET);

                        return res.status(200).json({ token });
                    } else {
                        return res.status(400).send('Password is wrong!');
                    }
                });
            } else {
                return res.status(400).send('User doesnt exist');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};


exports.contact = async (req, res) => {
    const email = req.body.email,
        name = req.body.name,
        message = req.body.message;

    //Missing fields
    if (!email || !name || !message) {
        return res.status(400).send('Field is missing');
    }

    // generate an object with mongoose model
    const contact = {
        email,
        name,
        message,
    };
    const newContact = new Contact(contact);
    newContact.save();
    // check if there is an error
    if (err) {
        console.error(err);
        return res.status(400).send('Something went wrong');
    }

    return res.status(200).send('Message sent');
};

require('dotenv').config();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const useRS256 = process.env.CUSTOMPREF_USERS256 ? process.env.CUSTOMPREF_USERS256 : false;

const userLoggedIn = (req, res, next) => {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
        return res.status(401).json({ error: 'Authorization token not found' });
    }

    const token = bearerToken.substring(7); // Remove "Bearer " prefix

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            // Token is invalid or has expired
            return res.status(403).json({ err, error: 'Token is invalid or expired.' });
        } else {
            // Token is valid

            // If token doesn't have roles
            if (!decoded.user.roles) {
                return res.status(403).json({ error: 'Access denied.' });
            }

            // Check if the user has an admin role
            if (decoded.user.roles === 'User' || decoded.user.roles === 'Admin') {
                // User is an admin, proceed to the next middleware or route handler
                next();
            } else {
                // User is not authorized, send an error response
                res.status(403).json({ error: 'Access denied.' });
            }
        }
    });
};

module.exports = userLoggedIn;

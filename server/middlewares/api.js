
const express = require('express');
const logger = require('../logger');

module.exports = (db) => {
    const router = express.Router();

    router.use((req, res, next) => {
        next();
    });

    router.get('/users', (req, res) => {
        db.collection('users').find({}).toArray((err, result) => {
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        });
    });

    router.post('/users', (req, res) => {
        db.collection('users').find({}, { userName: req.body.userName }).toArray((err, result) => {
            if (err) throw err;
            // user name already exists
            if (result.length) res.sendStatus(401);
        });
        db.collection('users').insertOne(req.body, (err, result) => {
            if (err) throw err;
            res.json(result.ops[0]);
        });
    });

    return router;
};


const express = require('express');
const logger = require('../logger');

module.exports = (db) => {
    const router = express.Router();
    logger.out('setting up api')

    router.use((req, res, next) => {
        next();
    });

    router.get('/users', (req, res) => {
        logger.out("hi yall")
        db.collection('users').find({}).toArray((err, result) => {
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        });
    });

    router.post('/users', (req, res) => {
        db.collection('users').insertOne(req.body, (err, result) => {
            if (err) throw err;
            res.sendStatus(200);
        });
    });

    return router;
};


const express = require('express');

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
        db.collection('users').insertOne(req.body, (err, result) => {
            if (err) throw err;
            res.sendStatus(200);
        });
    });

    return router;
};

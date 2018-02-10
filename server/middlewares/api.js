
const express = require('express');
const logger = require('../logger');

module.exports = (db) => {
    const router = express.Router();

    router.use((req, res, next) => {
        next();
    });

    // just for personal testing
    router.get('/users', (req, res) => {
        db.collection('users').find({}).toArray((err, result) => {
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        });
    });

    router.post('/users/login', (req, res) => {
        db.collection('users').findOne({}, {
            userName: req.body.userName,
            password: req.body.password
        }).toArray((err, result) => {
            if (err) {
                logger.error(err);
                res.sendStatus(401);
            }
            res.setHeader('Content-Type', 'application/json');
            res.json(result[0]);
        });
    });

    router.post('/users', (req, res) => {
        db.collection('users').find({ userName: req.body.userName }).toArray((err, result) => {
            if (err) {
                logger.error(err);
                res.sendStatus(401);
            }
            // user name already exists
            if (result.length) {
                logger.out(`user name: ${req.body.userName} already exists`);
                res.sendStatus(401);
            } else {
                db.collection('users').insertOne(req.body, (_err, _result) => {
                    if (_err) {
                        logger.error(_err);
                        res.sendStatus(401);
                    }
                    res.json(_result.ops[0]);
                });
            }
        });
    });

    return router;
};

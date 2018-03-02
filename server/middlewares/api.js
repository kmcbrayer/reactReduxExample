
const express = require('express');
const logger = require('../logger');
const ObjectId = require('mongodb').ObjectId;

module.exports = (db) => {
    const router = express.Router();

    router.use((req, res, next) => {
        next();
    });

    // just for personal testing
    router.get('/users', (req, res) => {
        db.collection('users').find({}).toArray((err, result) => {
            res.json(result);
        });
    });

    router.post('/users/login', (req, res) => {
        db.collection('users').find({
            userName: req.body.userName,
            password: req.body.password
        }).toArray((err, result) => {
            if (err) {
                logger.error(err);
                res.sendStatus(401);
            }
            if (! result[0]) res.sendStatus(401);
            res.json(result[0]);
        });
    });

    router.post('/users', (req, res) => {
        db.collection('users').find({ userName: req.body.userName }).toArray((err, result) => {
            if (err) {
                logger.error(err);
                res.sendStatus(400);
            }
            // user name already exists
            if (result.length) {
                logger.out(`user name: ${req.body.userName} already exists`);
                res.sendStatus(401);
            } else {
                db.collection('users').insertOne(req.body, (_err, _result) => {
                    if (_err) {
                        logger.error(_err);
                        res.sendStatus(400);
                    }
                    res.json(_result.ops[0]);
                });
            }
        });
    });

    // notes endpoints
    router.get('/notes/:id', (req, res) => {
        db.collection('notes').find({ authorId: req.params.id }).toArray((err, result) => {
            res.json(result);
        });
    });

    router.post('/notes', (req, res) => {
        db.collection('notes').insertOne(req.body, (err, result) => {
            if (err) {
                logger.error(err);
                res.sendStatus(400);
            }
            res.json(result.ops[0]);
        });
    });

    router.put('/notes/:id', (req, res) => {
        db.collection('notes').updateOne({ _id: ObjectId(req.params.id) }, {
            $set: {
                title: req.body.title,
                body: req.body.body,
                lastUpdated: req.body.lastUpdated
            }
        }, (err, result) => {
            if (err) {
                logger.error(err);
                res.sendStatus(400);
            }
            res.json(req.body);
        });
    });

    router.delete('/notes/:id', (req, res) => {
        db.collection('notes').remove({ _id: ObjectId(req.params.id) }, 1);
        res.sendStatus(200);
    });

    return router;
};

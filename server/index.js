/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');
const mongodb = require('mongodb');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const resolve = require('path').resolve;
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host

let db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, (err, database) => {
    if (err) {
        logger.error(err.message);
        process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = database.db('heroku_vp8bg0bc');
    logger.out('Database connection ready');

    setup(app, db, {
        outputPath: resolve(process.cwd(), 'build'),
        publicPath: '/',
    });

    app.listen(port, host, (error) => {
        if (error) {
            return logger.error(error.message);
        }
    });
});

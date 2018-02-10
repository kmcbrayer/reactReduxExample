/* eslint-disable global-require */

const api = require('./api');

module.exports = (app, db, options) => {
    const isProd = process.env.NODE_ENV === 'production';

    app.use('/api', api(db));

    if (isProd) {
        const addProdMiddlewares = require('./addProdMiddlewares');
        addProdMiddlewares(app, options);
    } else {
        const webpackConfig = require('../../internals/webpack/webpack.dev.babel');
        const addDevMiddlewares = require('./addDevMiddlewares');
        addDevMiddlewares(app, webpackConfig);
    }

    return app;
};

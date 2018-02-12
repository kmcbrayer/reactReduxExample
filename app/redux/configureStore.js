import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogicMiddleware } from 'redux-logic';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createReducer from './reducers';
import rootLogic from './rootLogic';


export default function configureStore(initialState = {}, history) {
    const logicMiddleware = createLogicMiddleware(rootLogic);

    const middlewares = [
        routerMiddleware(history),
        logicMiddleware
    ];

    const enhancers = [
        applyMiddleware(...middlewares)
    ];

    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    /* eslint-disable no-underscore-dangle */
    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
                // Prevent recomputing reducers for `replaceReducer`
                shouldHotReload: false,
            })
            : compose;
    /* eslint-enable */

    const persistConfig = {
        key: 'reduxStore',
        storage
    };

    const persistedReducer = persistReducer(persistConfig, createReducer());

    const store = createStore(
        persistedReducer,
        initialState,
        composeEnhancers(...enhancers),
    );

    const persistor = persistStore(store);

    // Make reducers hot reloadable, see http://mxs.is/googmo
    /* istanbul ignore next */
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(createReducer(store.injectedReducers));
        });
    }

    return {
        store,
        persistor
    };
}

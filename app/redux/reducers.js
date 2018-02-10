import { combineReducers } from 'redux';
import userReducer from './User/UserReducer';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
    return combineReducers({
        user: userReducer,
        ...injectedReducers,
    });
}

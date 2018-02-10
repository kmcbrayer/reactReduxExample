import { combineReducers } from 'redux';
import userReducer from './User/UserReducer';
import notesReducer from './Notes/NoteReducer';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
    return combineReducers({
        user: userReducer,
        notes: notesReducer,
        ...injectedReducers
    });
}

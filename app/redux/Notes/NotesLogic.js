import { createLogic } from 'redux-logic';
import actionTypes from '../ActionConstants';
const axios = require('axios');

const notesFetchLogic = createLogic({
    type: actionTypes.FETCH_NOTES_REQUEST,
    cancelType: actionTypes.FETCH_NOTES_CANCEL,
    debounce: 500, // ms
    latest: true,

    process({ action }, dispatch, done) {
        axios.get(`/api/notes/${action.payload.authorId}`)
            .then((response) => response.data)
            .then((notesJson) => dispatch({
                type: actionTypes.FETCH_NOTES_SUCCESS,
                payload: {
                    list: notesJson.map((note) => ({
                        id: note._id,
                        title: note.title,
                        body: note.body,
                        authorId: note.authorId
                    }))
                }
            }))
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: actionTypes.FETCH_NOTES_ERROR,
                    payload: {
                        errorMessage: 'Username and password combination did not match'
                    }
                });
            })
            .then(() => done());
    }
});

export default [
    notesFetchLogic
];

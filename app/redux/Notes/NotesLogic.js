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
                        authorId: note.authorId,
                        lastUpdated: note.lastUpdated,
                        dateCreated: note.dateCreated
                    }))
                }
            }))
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: actionTypes.FETCH_NOTES_ERROR,
                    payload: {
                        errorMessage: 'Could not fetch notes'
                    }
                });
            })
            .then(() => done());
    }
});

const addBlankNoteLogic = createLogic({
    type: actionTypes.ADD_BLANK_NOTE,
    cancelType: actionTypes.ADD_BLANK_NOTE_CANCEL,
    debounce: 500, // ms
    latest: true,

    process({ action }, dispatch, done) {
        axios.post('/api/notes', {
            authorId: action.payload.authorId,
            title: 'Title',
            body: '',
            lastUpdated: Date.now(),
            dateCreated: Date.now()
        })
            .then((response) => response.data)
            .then((note) => dispatch({
                type: actionTypes.ADD_BLANK_NOTE_SUCCESS,
                payload: {
                    id: note._id,
                    title: note.title,
                    body: note.body,
                    authorId: note.authorId,
                    lastUpdated: note.lastUpdated,
                    dateCreated: note.dateCreated
                }
            }))
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: actionTypes.ADD_BLANK_NOTE_ERROR,
                });
            })
            .then(() => done());
    }
});

const editNoteLogic = createLogic({
    type: actionTypes.UPDATE_NOTE,
    cancelType: actionTypes.UPDATE_NOTE_CANCEL,
    debounce: 1000, // ms
    latest: true,

    process({ action }, dispatch, done) {
        axios.put(`/api/notes/${action.payload.note.id}`, {
            id: action.payload.note.id,
            authorId: action.payload.note.authorId,
            title: action.payload.note.title,
            body: action.payload.note.body,
            lastUpdated: Date.now(),
            dateCreated: action.payload.note.dateCreated
        })
            .then((response) => response.data)
            .then((note) => dispatch({
                type: actionTypes.UPDATE_NOTE_SUCCESS,
                payload: {
                    id: note.id,
                    title: note.title,
                    body: note.body,
                    authorId: note.authorId,
                    lastUpdated: note.lastUpdated,
                    dateCreated: note.dateCreated
                }
            }))
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: actionTypes.UPDATE_NOTE_ERROR,
                });
            })
            .then(() => done());
    }
});

const deleteNoteLogic = createLogic({
    type: actionTypes.DELETE_NOTE,
    cancelType: actionTypes.DELETE_NOTE_CANCEL,
    debounce: 500, // ms
    latest: true,

    process({ action }, dispatch, done) {
        axios.delete(`/api/notes/${action.payload.noteId}`)
            .then((response) => dispatch({
                type: actionTypes.DELETE_NOTE_SUCCESS
            }))
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: actionTypes.DELETE_NOTE_ERROR,
                });
            })
            .then(() => done());
    }
});

export default [
    notesFetchLogic,
    addBlankNoteLogic,
    editNoteLogic,
    deleteNoteLogic
];

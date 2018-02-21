import actionTypes from '../ActionConstants';

export const fetchNotes = ({ authorId }) => ({
    type: actionTypes.FETCH_NOTES_REQUEST,
    payload: {
        authorId
    }
});

export const addBlankNote = ({ authorId }) => ({
    type: actionTypes.ADD_BLANK_NOTE,
    payload: {
        authorId
    }
});

export const editNote = ({ note }) => ({
    type: actionTypes.UPDATE_NOTE,
    payload: {
        note
    }
});

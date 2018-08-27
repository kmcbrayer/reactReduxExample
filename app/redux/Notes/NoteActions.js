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

export const selectNote = (noteId) => ({
    type: actionTypes.SELECT_NOTE,
    payload: {
        noteId
    }
});

export const deleteNote = (noteId) => ({
    type: actionTypes.DELETE_NOTE,
    payload: {
        noteId
    }
});

export const searchNotes = (searchText) => ({
    type: actionTypes.SEARCH_NOTES,
    payload: {
        searchText
    }
});

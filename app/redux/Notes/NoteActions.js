import actionTypes from '../ActionConstants';

export const fetchNotes = ({ authorId }) => ({
    type: actionTypes.FETCH_NOTES_REQUEST,
    payload: {
        authorId
    }
});

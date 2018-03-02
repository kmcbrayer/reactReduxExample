import actionTypes from '../ActionConstants';

const initialState = {
    list: [],
    selectedNote: undefined
};

// note = {
//     id: "string",
//     title: "string" can I put a length here?,
//     body: "large string?",
//     authorId: "string",
//     dateCreated: mongo date?
//     lastUpdated: mongo date?
// }

export default function notesReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_NOTES_SUCCESS:
            const mostRecentlyUpdated = action.payload.list.reduce((a, b) => {
                return (a.lastUpdated > b.lastUpdated) ? a : b;
            });
            return Object.assign({}, state, {
                list: action.payload.list,
                selectedNote: mostRecentlyUpdated
            });
        case actionTypes.ADD_BLANK_NOTE_SUCCESS:
            return Object.assign({}, state, {
                list: [...state.list, action.payload],
                selectedNote: action.payload
            });
        case actionTypes.UPDATE_NOTE_SUCCESS:
            const newList = state.list.map((note) => {
                if (note.id === action.payload.id) {
                    return action.payload;
                }
                return note;
            });
            return Object.assign({}, state, {
                list: newList,
                selectedNote: action.payload
            });
        case actionTypes.SELECT_NOTE:
            const selectedNote = state.list.find((note) => {
                return note.id === action.payload.noteId;
            });
            return Object.assign({}, state, {
                selectedNote
            });
        case actionTypes.DELETE_NOTE_SUCCESS:
            const newListNow = state.list.filter((note) => {
                return note.id !== state.selectedNote.id;
            });
            const mostRecentlyUpdatedNow = newListNow.reduce((a, b) => {
                return (a.lastUpdated > b.lastUpdated) ? a : b;
            });
            return Object.assign({}, state, {
                list: newListNow,
                selectedNote: mostRecentlyUpdatedNow
            });
        default:
            return state;
    }
}

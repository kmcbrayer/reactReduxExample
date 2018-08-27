import actionTypes from '../ActionConstants';

const initialState = {
    list: [],
    filteredList: [],
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

const getMostRecentlyUpdated = (noteList) => (
    noteList.reduce((a, b) => (
        (a.lastUpdated > b.lastUpdated) ? a : b
    ))
);

const setSelectedNote = (list, noteId) => (
    list.find((note) => (
        note.id === noteId
    ))
);

const addNote = (list, updatedNote) => (
    list.map((note) => {
        if (note.id === updatedNote.id) {
            return updatedNote;
        }
        return note;
    })
);

const removeNote = (list, noteToDelete) => (
    list.filter((note) => (
        note.id !== noteToDelete.id
    ))
);

const filterNoteListBySearchText = (list, searchText) => (
    list.filter((note) => (
        note.title.includes(searchText) || note.body.includes(searchText)
    ))
);

export default function notesReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_NOTES_SUCCESS:
            return Object.assign({}, state, {
                list: action.payload.list,
                filteredList: action.payload.list,
                selectedNote: getMostRecentlyUpdated(action.payload.list)
            });
        case actionTypes.ADD_BLANK_NOTE_SUCCESS:
            return Object.assign({}, state, {
                list: [...state.list, action.payload],
                selectedNote: action.payload
            });
        case actionTypes.UPDATE_NOTE_SUCCESS:
            return Object.assign({}, state, {
                list: addNote(state.list, action.payload),
                selectedNote: action.payload
            });
        case actionTypes.SELECT_NOTE:
            return Object.assign({}, state, {
                selectedNote: setSelectedNote(state.list, action.payload.noteId)
            });
        case actionTypes.DELETE_NOTE_SUCCESS:
            const updatedList = removeNote(state.list, action.payload);
            return Object.assign({}, state, {
                list: updatedList,
                selectedNote: getMostRecentlyUpdated(updatedList)
            });
        case actionTypes.SEARCH_NOTES:
            const updatedList2 = filterNoteListBySearchText(
                state.list, action.payload.searchText
            );
            return Object.assign({}, state, {
                filteredList: updatedList2,
                selectedNote: getMostRecentlyUpdated(updatedList2)
            });
        default:
            return state;
    }
}

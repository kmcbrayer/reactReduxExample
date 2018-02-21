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
            return Object.assign({}, state, {
                list: action.payload.list,
                selectedNote: action.payload.list[0]
            });
        case actionTypes.ADD_BLANK_NOTE_SUCCESS:
            return Object.assign({}, state, {
                list: [...state.list, action.payload],
                selectedNote: action.payload
            });
        default:
            return state;
    }
}

import actionTypes from '../ActionConstants';

const initialState = {
    isFetching: false,
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
        case actionTypes.FETCH_NOTES_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case actionTypes.FETCH_NOTES_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                list: action.payload.list
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

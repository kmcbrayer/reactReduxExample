import actionTypes from '../ActionConstants';

const initialState = {
    isFetching: false,
    list: []
};

export default function notesReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_NOTES_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case actionTypes.FETCH_NOTES_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                notes: action.payload.notes
            });
        default:
            return state;
    }
}

import { actionTypes } from '../ActionConstants';

const initialUserState = {
    id: 0,
    isLoggedIn: false,
    isLoggingIn: false,
    userName: null
};

export default function userReducer(state = initialUserState, action) {
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            return {
                isLoggedIn: true,
            };
        case actionTypes.USER_SIGNUP_SUBMIT:
            return Object.assign({}, state, {
                isLoggingIn: true
            });
        case actionTypes.USER_SIGNUP_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: true,
                isLoggingIn: false,
                id: action.payload.id,
                userName: action.payload.userName,
            });
        case actionTypes.USER_SIGNUP_ERROR:
            return Object.assign({}, state, {
                isLoggedIn: false,
                isLoggingIn: false,
                id: 0,
                userName: null
            });
        default:
            return state;
    }
}

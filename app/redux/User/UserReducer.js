import actionTypes from '../ActionConstants';

const initialUserState = {
    id: 0,
    isLoggedIn: false,
    isLoggingIn: false,
    userName: null,
    errorMessage: null
};

export default function userReducer(state = initialUserState, action) {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUBMIT:
            return Object.assign({}, state, {
                isLoggingIn: true
            });
        case actionTypes.USER_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: true,
                isLoggingIn: false,
                id: action.payload._id,
                userName: action.payload.userName
            });
        case actionTypes.USER_LOGIN_ERROR:
            return Object.assign({}, state, {
                isLoggedIn: false,
                isLoggingIn: false,
                id: 0,
                userName: null,
                errorMessage: action.payload.errorMessage
            });
        case actionTypes.USER_SIGNUP_SUBMIT:
            return Object.assign({}, state, {
                isLoggingIn: true
            });
        case actionTypes.USER_SIGNUP_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: true,
                isLoggingIn: false,
                id: action.payload._id,
                userName: action.payload.userName,
            });
        case actionTypes.USER_SIGNUP_ERROR:
            return Object.assign({}, state, {
                isLoggedIn: false,
                isLoggingIn: false,
                id: 0,
                userName: null,
                errorMessage: action.payload.errorMessage
            });
        default:
            return state;
    }
}

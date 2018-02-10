import actionTypes from '../ActionConstants';

export const userSignUpSubmit = ({ userName, password }) => ({
    type: actionTypes.USER_SIGNUP_SUBMIT,
    payload: {
        userName,
        password
    }
});

export const userLoginSubmit = ({ userName, password }) => ({
    type: actionTypes.USER_LOGIN_SUBMIT,
    payload: {
        userName,
        password
    }
});

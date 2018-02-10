import actionTypes from '../ActionConstants';

export const userSignUpSubmit = ({ userName, password }) => ({
    type: actionTypes.USER_SIGNUP_SUBMIT,
    payload: {
        userName,
        password
    }
});

export const userSignUpSuccess = (userJson) => ({
    type: actionTypes.USER_SIGNUP_SUCCESS,
    payload: userJson
});

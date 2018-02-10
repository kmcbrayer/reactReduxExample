import { createLogic } from 'redux-logic';
import actionTypes from '../ActionConstants';
const axios = require('axios');

const userSignUpLogic = createLogic({
    type: actionTypes.USER_SIGNUP_SUBMIT,
    cancelType: actionTypes.USER_SIGNUP_CANCEL,
    debounce: 500, // ms
    latest: true,

    process({ action }, dispatch, done) {
        console.log('hit logic')
        axios.post('/api/users')
            .then((response) => response.data.user)
            .then((userJson) => dispatch({
                type: actionTypes.USER_SIGNUP_SUCCESS,
                payload: userJson
            }))
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: actionTypes.USER_SIGNUP_ERROR
                });
            })
            .then(() => done());
    }
});

export default [
    userSignUpLogic
];

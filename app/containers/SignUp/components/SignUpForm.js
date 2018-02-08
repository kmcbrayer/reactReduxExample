import React from 'react';
import PropTypes from 'prop-types';

const SignUpForm = ({
    passwordInputHandler,
    userNameInputHandler,
    formSubmitHandler
}) => (
    <div>
        <div>
            <label htmlFor="userNameInput" >User Name:</label>
            <input
                name="userNameInput"
                type="text"
                onKeyUp={userNameInputHandler}
                placeholder="kmac" />
        </div>
        <div>
            <label htmlFor="password" >Password:</label>
            <input
                name="password"
                type="password"
                onKeyUp={passwordInputHandler}
                placeholder="********" />
        </div>
        <button onClick={formSubmitHandler}>Sign Up!</button>
    </div>
);

SignUpForm.propTypes = {
    passwordInputHandler: PropTypes.func,
    userNameInputHandler: PropTypes.func,
    formSubmitHandler: PropTypes.func
};

export default SignUpForm;

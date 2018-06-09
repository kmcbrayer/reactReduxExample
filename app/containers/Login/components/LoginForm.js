import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 3.5rem;
    text-align: center;
    padding-bottom: 4rem;
`;

const Input = styled.input`
    width: 100%;
    font-size: 1.5rem;
    border-bottom: 1px #212121 solid;
    margin-bottom: 1rem;
    padding-bottom: 0.3rem;
    color: #212121;
    
    :focus {
        outline: none;
    }
    
    ::placeholder {
        color: #212121;
        text-align: left;
    }
`;

const Button = styled.button`
    width: 100%;
    background-color: lightgray;
    padding: 1rem;
    margin-top: 1rem;
`;

const LoginForm = ({
    passwordInputHandler,
    userNameInputHandler,
    formSubmitHandler
}) => (
    <div>
        <Header>My Notes</Header>
        <Input
            name="userNameInput"
            type="text"
            onKeyUp={userNameInputHandler}
            placeholder="User Name" />
        <Input
            name="password"
            type="password"
            onKeyUp={passwordInputHandler}
            placeholder="Password" />
        <Button onClick={formSubmitHandler}>Log In</Button>
    </div>
);

LoginForm.propTypes = {
    passwordInputHandler: PropTypes.func,
    userNameInputHandler: PropTypes.func,
    formSubmitHandler: PropTypes.func
};

export default LoginForm;

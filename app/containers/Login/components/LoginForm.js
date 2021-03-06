import React from 'react';
import PropTypes from 'prop-types';

import { Header, Input, Button } from '../../../components/FormComponents';

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

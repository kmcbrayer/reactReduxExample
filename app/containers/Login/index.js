import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import LoginForm from './components/LoginForm';
import { userLoginSubmit } from '../../redux/User/UserActions';

const Container = styled.div`
    background-image: url('login_signup_background.jpg');
    height: 100vh;
    width: 100vw;
    vertical-align: middle;
    display: table-cell;
`;

const FormContainer = styled.div`
    margin: auto;
    width: 300px;
`;

const Error = styled.h3`
    color: darkred;
    text-align: center;
`;

const Href = styled(Link)`
    color: #212121;
    margin-top: 1rem;
    display: block;
    width: 100%;
    text-align: center;
`;

class Login extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        };
    }

    handleUserNameInputKeyUp = (e) => {
        e.preventDefault();
        const userName = e.target.value;
        this.setState({ userName });
    };

    handlePasswordInputKeyUp = (e) => {
        e.preventDefault();
        const password = e.target.value;
        this.setState({ password });
    };

    formSubmitHandler = () => {
        this.props.submitLogin({
            userName: this.state.userName,
            password: this.state.password
        });
    };

    render() {
        return (
            ! this.props.isLoggedIn ? (
                <Container>
                    <FormContainer>
                        {this.props.userRequestErrorMessage ? (
                            <Error>{this.props.userRequestErrorMessage}</Error>
                        ) : null }
                        <LoginForm
                            passwordInputHandler={this.handlePasswordInputKeyUp}
                            userNameInputHandler={this.handleUserNameInputKeyUp}
                            formSubmitHandler={this.formSubmitHandler} />
                        <Href to="/signup">Create Account</Href>
                    </FormContainer>
                </Container>
            ) : (
                <Redirect to="/" />
            )
        );
    }
}

Login.propTypes = {
    submitLogin: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    userRequestErrorMessage: PropTypes.string,
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.user.isLoggedIn,
    userRequestErrorMessage: state.user.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
    submitLogin: ({ userName, password }) => {
        dispatch(userLoginSubmit({ userName, password }));
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

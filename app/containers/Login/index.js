import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import LoginForm from './components/LoginForm';
import { userLoginSubmit } from '../../redux/User/UserActions';

const Container = styled.div`
    background-image: url('login_signup_background.jpg');
    height: 100vh;
    width: 100vw;
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
            ! this.props.isLoggedIn ? ( // no idea if this is the right way to do this
                <Container>
                    <h1>
                        Login
                    </h1>
                    {this.props.userRequestErrorMessage ? (
                        <div>{this.props.userRequestErrorMessage}</div>
                    ) : null }
                    <LoginForm
                        passwordInputHandler={this.handlePasswordInputKeyUp}
                        userNameInputHandler={this.handleUserNameInputKeyUp}
                        formSubmitHandler={this.formSubmitHandler} />
                    <Link to="/signup">Sign Up</Link>
                </Container>
            ) : (
                <Redirect to="/" />
            )
        );
    }
}

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

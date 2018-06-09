import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, FormContainer, Href, Error } from '../../components/FormComponents';
import LoginForm from './components/LoginForm';
import { userLoginSubmit } from '../../redux/User/UserActions';

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

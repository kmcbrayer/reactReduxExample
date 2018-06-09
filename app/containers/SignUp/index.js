import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SignUpForm from './components/SignUpForm';
import { userSignUpSubmit } from '../../redux/User/UserActions';
import { Container, FormContainer, Href, Error } from '../../components/FormComponents';

class SignUp extends React.PureComponent {
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
        this.props.submitSignUp({
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
                        <SignUpForm
                            passwordInputHandler={this.handlePasswordInputKeyUp}
                            userNameInputHandler={this.handleUserNameInputKeyUp}
                            formSubmitHandler={this.formSubmitHandler} />
                        <Href to="/login">Log In</Href>
                    </FormContainer>
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
    submitSignUp: ({ userName, password }) => {
        dispatch(userSignUpSubmit({ userName, password }));
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));

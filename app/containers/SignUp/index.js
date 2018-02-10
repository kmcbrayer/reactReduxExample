import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import SignUpForm from './components/SignUpForm';
import { userSignUpSubmit } from '../../redux/User/UserActions';

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
                <div>
                    <h1>
                        Sign Up
                    </h1>
                    <SignUpForm
                        passwordInputHandler={this.handlePasswordInputKeyUp}
                        userNameInputHandler={this.handleUserNameInputKeyUp}
                        formSubmitHandler={this.formSubmitHandler} />
                    <Link to="/login">Log In</Link>
                </div>
            ) : (
                <Redirect to="/" />
            )
        );
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
    submitSignUp: ({ userName, password }) => {
        dispatch(userSignUpSubmit({ userName, password }));
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));

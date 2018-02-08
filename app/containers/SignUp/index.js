import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SignUpForm from './components/SignUpForm';

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
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    submitSignUp: (state) => {
        //dispatch(actions.submitSignUp(state));
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));

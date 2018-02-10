import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
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
            ! this.props.isLoggedIn ? ( // no idea if this is the right way to do this
                <div>
                    <h1>
                        Login
                    </h1>
                    <LoginForm
                        passwordInputHandler={this.handlePasswordInputKeyUp}
                        userNameInputHandler={this.handleUserNameInputKeyUp}
                        formSubmitHandler={this.formSubmitHandler} />
                    <Link to="/signup">Sign Up</Link>
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
    submitLogin: ({ userName, password }) => {
        dispatch(userLoginSubmit({ userName, password }));
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

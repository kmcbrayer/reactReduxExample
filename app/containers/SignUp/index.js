import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class SignUp extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        };
    }
    render() {
        return (
            <div>
                <h1>
                    Sign Up
                </h1>
                <Link to="/login">Log In</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));

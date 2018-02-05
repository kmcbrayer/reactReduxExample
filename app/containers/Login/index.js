import React from 'react';
import { Link } from 'react-router-dom'

export default class Login extends React.PureComponent {
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
                    Login
                </h1>
                <Link to="/signup">Sign Up</Link>
            </div>
        );
    }
}

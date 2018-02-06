import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HomePage from '../HomePage/Loadable';
import Login from '../Login/Loadable';
import SignUp from '../SignUp/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';

class App extends React.PureComponent {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => (
                        this.props.isLoggedIn ? (
                            <HomePage />
                        ) : (
                            <Redirect to="/login" />
                        )
                    )} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        );
    }
}

App.propTypes = {
    isLoggedIn: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
    // not used yet
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

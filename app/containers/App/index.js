import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HomePage from '../HomePage/Loadable';
import LoginPage from '../Login/Loadable';
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
                            <LoginPage />
                        )
                    )} />
                    <Route path="/login" component={LoginPage} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

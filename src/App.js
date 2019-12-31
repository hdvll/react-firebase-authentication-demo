import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { authUser, authLoading } from './actions/auth';
import './App.css';
import { FirebaseContext } from './components/Firebase';
import Home from './containers/Home';
import Header from './containers/Header';

const App = ({ authUser, authLoading }) => {
  useEffect(() => {
    authLoading(true).then(authUser());
  }, [authUser, authLoading]);

  return (
    <FirebaseContext.Consumer>
      {firebase => {
        return (
          <Router>
            <Header />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
            </Switch>
          </Router>
        );
      }}
    </FirebaseContext.Consumer>
  );
};

export default connect(null, {
  authUser,
  authLoading
})(App);

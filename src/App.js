import React, { Component } from 'react';
import './App.css';
import Login from './views/pages/Login/Login';
import { BrowserRouter as Router,Redirect, Route, Switch, HashRouter } from 'react-router-dom';
import AuthenticatedRoute from './services/AutheticatedRoute';
import DefaultLayout from './containers/DefaultLayout/DefaultLayout';

// Import Main styles for this application
import './scss/style.css';

class App extends Component {
  render () {
  return (
    <Router>
        <Switch>
          <Route exact path="/login" name="Login page" component={ Login } />
          <AuthenticatedRoute path="/" name="default Layout page" component= { DefaultLayout } />
          <Redirect exact from="/" to="/login" name="Login Page" component={ Login } />
        </Switch>
      </Router>
  );
}
}

export default App;

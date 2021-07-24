import React from "react";
import {Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';
import EventsPage from './containers/EventsPage';
import AccountPage from './containers/AccountPage';
import AboutPage from './containers/AboutPage';
import LoginPage from './containers/LoginPage';
import MentorsPage from './containers/MentorsPage';
import RegistrationPage from './containers/RegistrationPage';

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/events" component={EventsPage} />
        <Route exact path="/accounts" component={AccountPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/mentors" component={MentorsPage} />
        <Route exact path="/registration" component={RegistrationPage} />
      </Switch>
    </React.Fragment>
  )
}

export default App;

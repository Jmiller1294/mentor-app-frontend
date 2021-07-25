import React from "react";
import {Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';
import EventsPage from './containers/EventsPage';
import AccountPage from './containers/AccountPage';
import AboutPage from './containers/AboutPage';
import LoginPage from './containers/LoginPage';
import MentorsPage from './containers/MentorsPage';
import RegistrationPage from './containers/RegistrationPage';
import NavBar from './components/NavBar';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
  } 
`

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/events" component={EventsPage} />
        <Route exact path="/accounts" component={AccountPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/mentors" component={MentorsPage} />
        <Route exact path="/registration" component={RegistrationPage} />
      </Switch>
      <GlobalStyle />
    </React.Fragment>
  )
}

export default App;

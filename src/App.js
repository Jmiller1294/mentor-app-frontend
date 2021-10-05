import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import {Route, Switch } from 'react-router-dom';
import ProtectedRoute from "./components/navigation/ProtectedRoute";
import HomePage from './containers/HomePage';
import EventsPage from './containers/EventsPage';
import AccountPage from './containers/AccountPage';
import AboutPage from './containers/AboutPage';
import LoginPage from './containers/LoginPage';
import MentorsPage from './containers/MentorsPage';
import EventRegistration from "./containers/EventRegistration";
import NavBar from './components/navigation/NavBar';
import Message from "./components/Message";
import FileUploadPage from "./containers/FileUploadPage";
import { createGlobalStyle } from 'styled-components';
import { checkLoggedInStatus } from "./actions/userActions";
import AppointmentPage from "./containers/AppointmentPage";
import DescriptionPage from "./containers/DescriptionPage";
import CareersPage from "./containers/CareersPage";
import SignupPage from "./containers/SignupPage";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: Helvetica, sans-serif;
  } 
`

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(checkLoggedInStatus)
   console.log('loaded')
  }, );

  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/events" component={EventsPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/mentors" component={MentorsPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/careers" component={CareersPage} />
        <ProtectedRoute exact path="/accounts/:id" component={AccountPage} />
        <ProtectedRoute exact path="/registration" component={EventRegistration} />
        <ProtectedRoute exact path="/appointment" component={AppointmentPage} />
        <ProtectedRoute exact path="/message" component={Message} />
        <ProtectedRoute exact path="/upload" component={FileUploadPage} />
        <ProtectedRoute exact path="/descriptions/:id" component={DescriptionPage} />
      </Switch>
      <GlobalStyle />
    </React.Fragment>
  )
}

export default App;

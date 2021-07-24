import React from "react";
import {Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </React.Fragment>
  )
}

export default App;

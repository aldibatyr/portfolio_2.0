import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import WelcomePage from './Routes/WelcomePage/WelcomePage';
import MainContent from './Routes/MainContent/MainContent';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route
            exact path={'/'}
            component={WelcomePage}
          />
          <Route
            path={'/showcase'}
            component={MainContent}
          />
        </Switch>
    </div>
  );
}

export default App;

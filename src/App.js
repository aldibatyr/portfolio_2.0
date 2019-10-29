import React from 'react';
import {TransitionGroup, Transition} from 'react-transition-group';
import {Route, Switch, withRouter} from 'react-router-dom'
import './App.css';
import WelcomePage from './Routes/WelcomePage/WelcomePage';
import MainContent from './Routes/MainContent/MainContent';

function App({location}) {
  return (
    <div className="App">
      <Route render={({location}) => {
        const {key} = location
        return (
          <TransitionGroup component={null}>
            <Transition
              key={key}
              appear={true}
              // onEnter={(node, appears) => AnimationPlaybackEvent(pathname, node, appears)}
              timeout={{enter: 750, exit: 150}}
            >
              <Switch location={location}>
                <Route
                  exact path={'/'}
                  component={WelcomePage}
                />
                <Route
                  path={'/showcase'}
                  component={MainContent}
                />
              </Switch>
            </Transition>
          </TransitionGroup>
        )
      }}/>

    </div>
  );
}

export default withRouter(App);

import React from 'react';
import { Route, Switch, Router } from "react-router";
import { createBrowserHistory } from "history";
import { Login, Home } from './components/pages';
import { RecoilRoot } from 'recoil';
import dotenv from 'dotenv';
import './App.css';


const history = createBrowserHistory();
dotenv.config();

function App() {
  return (
    <RecoilRoot>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;

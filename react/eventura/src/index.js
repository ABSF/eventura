import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import EventsList from './EventsList.js';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

ReactDOM.render((
    <Router>
      <Route path="/" component={App} />
      <Route path="/wyszukiwanie" component={EventsList} />
    </Router>),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

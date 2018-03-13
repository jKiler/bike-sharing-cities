import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import City from './City';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/:city" component={City} />
        </div>
      </Router>
    );
  }
}
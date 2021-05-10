import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import IndexPage from './pages/Index';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={IndexPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

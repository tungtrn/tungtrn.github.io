import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import IndexPage from './pages/Index';
// import { IntlProvider } from 'react-intl';

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

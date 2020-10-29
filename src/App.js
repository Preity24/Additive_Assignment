import React from 'react';
import Home from './components/Home/Home';
import Overview from './components/Overview/Overview';
import PageNotFound from './components/PageNotFound/PageNotFound';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/overview/:name" component={Overview} />
        <Route path="/overview" component={PageNotFound} />
        {/* Default Route added */}
        <Route exact path="/" >
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

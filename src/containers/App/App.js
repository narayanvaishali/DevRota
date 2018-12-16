import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Views
import Login from '../../views/Login';

const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Login} />
      <Route exact path="/hello" render={() => <h1> hello again</h1>} />
    </Fragment>
  </Router>
);


export default App;

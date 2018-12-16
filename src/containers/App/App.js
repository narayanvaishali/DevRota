import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Views
import Login from '../../views/Login';

const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Login} />
      <Route
        exact
        path="/hello"
        render={() => (
          <h1>
            hello again
            <Link to="/">
              Back
            </Link>
          </h1>
        )}
      />
    </Fragment>
  </Router>
);


export default App;

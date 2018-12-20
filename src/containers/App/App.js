import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SecureRoute from '../../components/SecureRoute';

// Views
import Dashboard from '../../views/Dashboard';
import Login from '../../views/Login';
import Rota from '../../views/Rota';

const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/login" component={Login} />
      <SecureRoute exact path="/" component={Dashboard} />
      <Route exact path="/rota" component={Rota} />
    </Fragment>
  </Router>
);


export default App;

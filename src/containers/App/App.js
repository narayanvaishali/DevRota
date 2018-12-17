import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Views
import Login from '../../views/Login';
import Rota from '../../views/Rota';

const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Login} />
      <Route exact path="/rota" component={Rota} />
    </Fragment>
  </Router>
);


export default App;

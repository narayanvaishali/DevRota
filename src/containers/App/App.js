import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SecureRoute from '../../components/SecureRoute';
// Views
import Dashboard from '../../views/Dashboard';
import Login, { Logout } from '../../views/Login';
import MonthlyView from '../../views/MonthlyView';
import WeeklyView from '../../views/WeeklyView';
import CreateData from '../../views/Data/CreateData';

const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <SecureRoute exact path="/" component={Dashboard} />
      <SecureRoute exact path="/monthlyview" component={MonthlyView} />
      <SecureRoute exact path="/weeklyview" component={WeeklyView} />
      <SecureRoute exact path="/data" component={CreateData} />
    </Fragment>
  </Router>
);


export default App;

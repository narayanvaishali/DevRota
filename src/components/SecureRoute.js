import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { auth } from '../db';

const SecureRoute = ({ component: Component, ...rest }) => {
  const user = auth().currentUser;
  return (
    <Route
      {...rest}
      render={props =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

SecureRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default SecureRoute;

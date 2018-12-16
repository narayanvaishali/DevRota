import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';

const AppProvider = ({ children, theme }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired,
};

export default AppProvider;

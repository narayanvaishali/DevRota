import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

import Sidebar from './Sidebar';

import styles from './styles';

const Layout = ({
  classes,
  drawer,
  title,
  children,
}) => (
  <div className={classes.root}>
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5" color="inherit" noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
    {drawer ? <Sidebar /> : null}
    <main
      className={classNames({
        [classes.content]: drawer,
        [classes.main]: !drawer,
      })}
    >
      <div className={classes.toolbar} />
      {children}
    </main>
  </div>
);

Layout.defaultProps = {
  title: 'Dev Rota',
  drawer: true,
};

Layout.propTypes = {
  title: PropTypes.string,
  drawer: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(Layout);

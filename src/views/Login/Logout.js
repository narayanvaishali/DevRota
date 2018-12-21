import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ErrorIcon from '@material-ui/icons/Error';

import { auth } from '../../db';

import Layout from '../Layout';
import styles from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: false,
    };
  }

  componentDidMount() {
    const user = auth().currentUser;
    if (!user) {
      this.setState({
        loggedOut: true,
      });
    }
    auth().signOut().then(() => {
      setTimeout(() => this.setState({ loggedOut: true }), 1000);
    });
  }

  render() {
    const { loggedOut } = this.state;
    if (loggedOut) return <Redirect to="/login" />;

    const { classes } = this.props;
    return (
      <Layout drawer={false}>
        <div className="container">
          <Grid container justify="center">
            <Grid item xs={12} sm={8} md={4}>
              <form
                className={classes.loginForm}
                noValidate
                autoComplete="off"
              >
                <h2>Logging Out</h2>
                <SnackbarContent
                  className={classes.errorMessage}
                  aria-describedby="login-error"
                  message={(
                    <span id="login-error" className={classes.message}>
                      <ErrorIcon className={classes.messageIcon} />
                      Logging out....
                    </span>
                  )}
                />
              </form>
            </Grid>
          </Grid>
        </div>
      </Layout>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Login);

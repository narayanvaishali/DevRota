import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ErrorIcon from '@material-ui/icons/Error';

import { auth } from '../../db';

import Layout from '../Layout';
import styles from './styles';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'sabin@hotmail.com',
      password: 'password',
      message: undefined,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { history } = this.props;
    auth().signInWithEmailAndPassword(email, password).then(() => {
      history.push('/');
    }).catch((err) => {
      this.setState({
        message: err.message,
      });
    });
  }

  render() {
    const { classes } = this.props;
    const { email, password, message } = this.state;
    return (
      <Layout drawer={false}>
        <div className="container">
          <Grid container justify="center">
            <Grid item xs={12} sm={8} md={4}>
              <form
                className={classes.loginForm}
                noValidate
                autoComplete="off"
                onSubmit={this.handleLogin}
              >
                <h2>Login</h2>
                {message && (
                  <SnackbarContent
                    className={classes.errorMessage}
                    aria-describedby="login-error"
                    message={(
                      <span id="login-error" className={classes.message}>
                        <ErrorIcon className={classes.messageIcon} />
                        {message}
                      </span>
                    )}
                  />
                ) }
                <TextField
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  fullWidth
                  value={email}
                  onChange={this.handleChange}
                />
                <TextField
                  id="outlined-passowrd-input"
                  label="Password"
                  type="password"
                  name="password"
                  autoComplete="password"
                  margin="normal"
                  fullWidth
                  value={password}
                  onChange={this.handleChange}
                />
                <Button variant="outlined" color="secondary" className={classes.button} type="submit">
                  Login
                </Button>
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
  history: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Login);

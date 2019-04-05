import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styles from './styles';

const Register = ({
  classes,
  titleText,
  subtitleText,
  primaryBtnText,
  primaryBtnLink,
}) => {
  const Title = (
    <Typography variant="display2" className={classes.white} gutterBottom>
      {titleText}
    </Typography>
  );

  const Subtitle = (
    <Typography
      className={classes.white}
      variant="subheading"
      style={{ fontWeight: 500, fontSize: '22px', marginBottom: '1.35em' }}
      gutterBottom
    >
      {subtitleText}
    </Typography>
  );

  const PrimaryLink = props => <Link to={primaryBtnLink} {...props} />;

  const PrimaryBtn = (
    <Grid item className={classes.heroBtn} xs={12}>
      <Button
        title={primaryBtnText}
        className={classes.invertedBtn}
        style={{ width: '192px' }}
        component={PrimaryLink}
      >
        {primaryBtnText}
      </Button>
    </Grid>
  );
  return (
    <div
      className={classes.parallax}
      style={{
        backgroundImage:
          'linear-gradient(rgb(148, 132, 223), rgba(13, 97, 146, 0.89))',
        minHeight: '100vh',
      }}
    >
      {titleText && Title}
      {subtitleText && Subtitle}

      {primaryBtnText ? (
        <Grid container style={{ width: '100%' }} spacing={16}>
          {primaryBtnText && primaryBtnLink ? PrimaryBtn : null}
        </Grid>
      ) : null}
    </div>
  );
};

Register.propTypes = {
  classes: PropTypes.shapeOf({}).isRequired,
  titleText: PropTypes.string.isRequired,
  subtitleText: PropTypes.string.isRequired,
  primaryBtnText: PropTypes.node.isRequired,
  primaryBtnLink: PropTypes.node.isRequired,
};

export default withStyles(styles)(Register);

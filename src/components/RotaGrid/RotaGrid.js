import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import RotaGridHeader from './RotaGridHeader';
import RotaGridRow from './RotaGridRow';
import styles from './styles';

const Rota = ({ users, days, classes }) => (
  <table className={classes.rotaContainer}>
    <colgroup>
      <col width="300px" />
      <col width="auto" />
    </colgroup>
    <RotaGridHeader days={days} />
    <tbody>
      {users.map(staff => (
        <RotaGridRow staff={staff} days={days} />
      ))}
    </tbody>
  </table>
);

Rota.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
  days: PropTypes.arrayOf(PropTypes.date).isRequired,
};

export default withStyles(styles)(Rota);

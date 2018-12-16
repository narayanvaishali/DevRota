import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const RotaGridHeader = ({ days, classes }) => {
  const shifts = ['AM', 'PM'];
  return (
    <thead>
      <tr>
        <th>
          <table className={classes.rotaHeader}>
            <thead>
              <tr><th>&nbsp;</th></tr>
              <tr><th>&nbsp;</th></tr>
            </thead>
          </table>
        </th>
        <th>
          <table className={classes.rotaHeader}>
            <thead>
              <tr>
                {days.map(date => (
                  <th colSpan={2} key={moment(date).format('YYYYMMDD')}>
                    {moment(date).format('DD')}
                  </th>
                ))}
              </tr>
              <tr>
                {days.map(() => shifts.map(shift => (
                  <th key={shift}>{shift}</th>
                )))}
              </tr>
            </thead>
          </table>
        </th>
      </tr>
    </thead>
  );
};

RotaGridHeader.propTypes = {
  days: PropTypes.arrayOf(PropTypes.date).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(RotaGridHeader);

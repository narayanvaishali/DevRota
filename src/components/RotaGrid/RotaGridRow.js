import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import RotaGridCell from './RotaGridCell';

import styles from './styles';

const RotaGridRow = ({ classes, staff, days }) => {
  const shifts = ['AM', 'PM'];
  return (
    <tr>
      <td className={classes.rotaUserName}>
        {staff}
      </td>
      <td>
        <table className={classes.innerRotaTable}>
          <tbody>
            <tr>
              {days.map((day) => {
                const dayKey = moment(day).format('YYYYMMDD');
                return shifts.map(shift => (
                  <RotaGridCell
                    user={staff}
                    shift={shift}
                    dateKey={dayKey}
                    key={`${dayKey}${shift}`}
                  />
                ));
              })}
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
};

RotaGridRow.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  staff: PropTypes.string.isRequired,
  days: PropTypes.arrayOf(PropTypes.date).isRequired,
};

export default withStyles(styles)(RotaGridRow);

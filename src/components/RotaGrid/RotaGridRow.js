import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import RotaGridCell from './RotaGridCell';
import EditRotaGridCell from './EditRotaGridCell';
import styles from './styles';

class RotaGridRow extends Component {
  render() {
    const {
      classes,
      staff,
      days,
      show,
      onChange1,
      month,
      year,
    } = this.props;
    const shifts = ['AM', 'PM'];
    return (
      <tr>
        <td className={classes.rotaUserName}>
          {staff}
        </td>
        <td>
          { show === 'E'
            ? (
              <table className={classes.innerRotaTable}>
                <tbody>
                  <tr>
                    {
                    days.map((day) => {
                      const dayKey = moment(day).format('DD/MM/YYYY');
                      const check = moment(day, 'YYYY/MM/DD');

                      return shifts.map(shift => (

                        <EditRotaGridCell
                          user={staff}
                          shift={shift}
                          month={month}
                          year={year}
                          dateKey={dayKey}
                          day={check.format('D')}
                          days={days}
                          classes={classes}
                          onChange1={onChange1}
                        />

                      ));
                    })
                  }
                  </tr>

                </tbody>
              </table>
            )
            : (
              <table className={classes.innerRotaTable}>
                <tbody>
                  <tr>
                    {
                    days.map((day) => {
                      const dayKey = moment(day).format('DD/MM/YYYY');
                      const check = moment(day, 'YYYY/MM/DD');

                      return shifts.map(shift => (
                        <RotaGridCell
                          user={staff}
                          shift={shift}
                          month={month}
                          year={year}
                          dateKey={dayKey}
                          day={check.format('D')}
                          days={days}
                        />
                      ));
                    })
                  }
                  </tr>
                </tbody>
              </table>
            )
         }
        </td>
      </tr>
    );
  }
}

RotaGridRow.propTypes = {
  staff: PropTypes.string.isRequired,
  days: PropTypes.arrayOf(PropTypes.date).isRequired,
  classes: PropTypes.shapeOf({}).isRequired,
  show: PropTypes.bool.isRequired,
  onChange1: PropTypes.func.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default withStyles(styles)(RotaGridRow);

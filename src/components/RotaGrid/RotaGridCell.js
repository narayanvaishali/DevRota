import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Shift from '../../containers/Shift';
import styles from './styles';


const RotaGridCell = ({
  classes,
  user,
  shift,
  month,
  year,
  dateKey,
  day,
  days,
}) => (
  <Shift
    classes={classes}
    user={user}
    date={dateKey}
    day={day}
    shift={shift}
    month={month}
    year={year}
    days={days}
  >
    {({
      loading, error, data, id,
    }) => {
      if (loading) return <td>Loading...</td>;
      if (error) return <td>Error...</td>;

      const blockClasses = classNames({
        [classes.rotaBlock]: true,
        [classes[data]]: true,
      });

      return (<td key={id}><button type="button" className={blockClasses}>{data}</button></td>);
    } }
  </Shift>
);

RotaGridCell.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  user: PropTypes.string.isRequired,
  dateKey: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
  days: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default withStyles(styles)(RotaGridCell);

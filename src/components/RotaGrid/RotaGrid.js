import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import RotaGridHeader from './RotaGridHeader';
import RotaGridRow from './RotaGridRow';

const RotaGrid = ({
  users,
  days,
  classes,
  show,
  onChange1,
  month,
  year,
}) => (
  <table className={classes.rotaContainer}>
    <colgroup>
      <col width="250px" />
      <col width="auto" />
    </colgroup>
    <RotaGridHeader days={days} />
    <tbody>

      {users.map(staff => (
        <RotaGridRow
          staff={staff}
          days={days}
          show={show}
          onChange1={onChange1}
          month={month}
          year={year}
        />
      ))}
    </tbody>
  </table>
);
/*
const Rota = ({ users, days, classes, show, onChange1}) => (
  <table className={classes.rotaContainer}>
    <colgroup>
      <col width="250px" />
      <col width="auto" />
    </colgroup>
    <RotaGridHeader days={days} />
    <tbody>
      {users.map(staff => (
        <RotaGridRow staff={staff} days={days} show={show} onChange={onChange1}/>
      ))}
    </tbody>
  </table>
);
* */
RotaGrid.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
  days: PropTypes.arrayOf(PropTypes.date).isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  onChange1: PropTypes.func.isRequired,
};

export default withStyles(styles)(RotaGrid);

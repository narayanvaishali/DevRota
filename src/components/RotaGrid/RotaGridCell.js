import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Shift from '../../containers/Shift';
import styles from './styles';

const RotaGridCell = ({
  classes,
  user,
  dateKey,
  day,
  shift
}) => (
  <Shift user={user} date={dateKey} day = {day} shift={shift}>
    {({ loading, error, data, key }) => {
      if (loading) return <td>Loading...</td>;
      if (error) return <td>Error...</td>;

      const blockClasses = classNames({
        [classes.rotaBlock]: true,
        [classes[data]]: true,
      });

      return (
        <td><a className={blockClasses}>{data}</a></td>);
    } }
  </Shift>
);

RotaGridCell.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  user: PropTypes.string.isRequired,
  dateKey: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
};


export default withStyles(styles)(RotaGridCell);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Shift from '../../containers/Shift';
import styles from './styles';

class RotaGridCell extends Component {
  constructor(props) {
    super(props);
  }

  render ()
  {
      var {classes, user, shift, month, year,dateKey, day,days} = this.props;
      return(
            <Shift classes={classes} user={user} date={dateKey} day={day} shift={shift} month={month} year={year} days={days}>
                  {({ loading, error, data, id }) => {

                    if (loading) return <td>Loading...</td>;
                    if (error) return <td>Error...</td>;

                    const blockClasses = classNames({
                      [classes.rotaBlock]: true,
                      [classes[data]]: true,
                    });

                    return (
                      <td key={id}><a className={blockClasses} >{data}</a></td>);
                  } }
            </Shift>

      );
  }
}
/* var RotaGridCell = (
  {
  classes,
  user,
  shift,
  month,
  year,
  dateKey,
  day,
  days
}
) => (
  <Shift user={user} date={dateKey} day={day} shift={shift} month={month} year={year} days={days}>
    {({ loading, error, data, id }) => {
        //console.log ('data '+ data);

      if (loading) return <td>Loading...</td>;
      if (error) return <td>Error...</td>;

      const blockClasses = classNames({
        [classes.rotaBlock]: true,
        [classes[data]]: true,
      });

      return (
        <td key={id}><a className={blockClasses} >{data}</a></td>);
    } }
  </Shift>
); */

RotaGridCell.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  user: PropTypes.string.isRequired,
  dateKey: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
};
export default withStyles(styles)(RotaGridCell);
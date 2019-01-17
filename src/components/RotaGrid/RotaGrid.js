import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import RotaGridHeader from './RotaGridHeader';
import RotaGridRow from './RotaGridRow';
import styles from './styles';


class RotaGrid extends Component {
  constructor(props) {
    super(props);
  }

  render ()
  {
    const { users, days, classes, show, onChange1} = this.props;
    //console.log( 'RotaGrid : ' + this.props.onChange1);

    return(
       <table className={classes.rotaContainer}>
        <colgroup>
          <col width="250px" />
          <col width="auto" />
        </colgroup>
        <RotaGridHeader days={days} />
        <tbody>
          
          {users.map(staff => (
            <RotaGridRow staff={staff} days={days} show={show} onChange1={onChange1}/>
          ))}
        </tbody>
      </table> 
    );
  }

}
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
**/
RotaGrid.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
  days: PropTypes.arrayOf(PropTypes.date).isRequired,
};

export default withStyles(styles)(RotaGrid);

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

componentWillUnmount() {
   // database.ref.set(null);
    this.forceUpdate();
   }

   componentDidMount(){
        this.forceUpdate();
   }

  render ()
  {
    var { users, days, classes, show, onChange1, month,year } = this.props;

    //console.log('RotaGrid :  ' + JSON.stringify(days));

    return(
       <table className={classes.rotaContainer}>
        <colgroup>
          <col width="250px" />
          <col width="auto" />
        </colgroup>
        <RotaGridHeader days={days} />
        <tbody>
          
          {users.map(staff => (
            <RotaGridRow staff={staff} days={days} show={show} onChange1={onChange1}  month={month} year={year}/>
          ))}
        </tbody>
      </table> 
    );
  }
}

RotaGrid.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
  days: PropTypes.arrayOf(PropTypes.date).isRequired,
};

export default withStyles(styles)(RotaGrid);

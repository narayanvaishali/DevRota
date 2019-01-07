import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import RotaGridCell from './RotaGridCell';
import EditRotaGridCell from './EditRotaGridCell';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import styles from './styles';

class RotaGridRow extends Component {
  constructor(props) {
    super(props);
  }

  render ()
  {
    const {classes, staff, days, show, onChange1} = this.props;
    //console.log( 'RotaGridRow : ' + this.props.onChange1);

    const shifts = ['AM', 'PM'];
    return (
    <tr>
      <td className={classes.rotaUserName}>
        {staff}
      </td>
      <td>
         { show === 'E' ?
            <table className={classes.innerRotaTable}>
              <tbody>
                <tr>
                  {                   
                    days.map((day) => {
                    //const dayKey = moment(day).format('YYYYMMDD');
                     const dayKey = moment(day).format('DD/MM/YYYY');
                     const check = moment(day, 'YYYY/MM/DD');

                    return shifts.map(shift => ( 
                                       
                      <EditRotaGridCell
                        user={staff}
                        shift={shift}
                        dateKey={dayKey}
                        day = {check.format('D')}
                        //key={`${dayKey}${shift}`}
                        //key = {id}
                        classes = {classes}
                        onChange1={onChange1}
                      />
                      
                    ));
                  })
                  }
                </tr>
                
              </tbody>
            </table>
            :
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
                        dateKey={dayKey}
                        day = {check.format('D')}
                       // key={`${dayKey}${shift}`}
                        //key = {id}
                      />
                    ));
                  })
                  
                  }
                </tr>
              </tbody>
            </table>   
         }
      </td>
    </tr>
    )
  }
}


/*
const RotaGridRow = ({ classes, staff, days, show, onChange}) => {
  const shifts = ['AM', 'PM'];
  return (
    <tr>
      <td className={classes.rotaUserName}>
        {staff}
      </td>
      <td>
         { show === 'E' ?
            <table className={classes.innerRotaTable}>
              <tbody>
                <tr>
                  {                   
                    days.map((day) => {
                    const dayKey = moment(day).format('YYYYMMDD');
                    const check = moment(day, 'YYYY/MM/DD');
                    return shifts.map(shift => (
                  
                      <EditRotaGridCell
                        user={staff}
                        shift={shift}
                        dateKey={dayKey}
                        day = {check.format('D')}
                        key={`${dayKey}${shift}`}
                        onChange={onChange1}
                      />
                    ));
                  })
                  
                  }
                </tr>
              </tbody>
            </table>
            :
           <table className={classes.innerRotaTable}>
              <tbody>
                <tr>
                  {                   
                    days.map((day) => {
                    const dayKey = moment(day).format('YYYYMMDD');
                    return shifts.map(shift => (
                  
                      <RotaGridCell
                        user={staff}
                        shift={shift}
                        dateKey={dayKey}
                        key={`${dayKey}${shift}`}
                      />
                    ));
                  })
                  
                  }
                </tr>
              </tbody>
            </table>   
         }
      </td>
    </tr>
  );
};
*/
RotaGridRow.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  staff: PropTypes.string.isRequired,
  days: PropTypes.arrayOf(PropTypes.date).isRequired,
};

export default withStyles(styles)(RotaGridRow);

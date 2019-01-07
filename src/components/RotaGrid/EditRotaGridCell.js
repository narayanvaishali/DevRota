import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
//import Select from 'react-select';
import Shift from '../../containers/Shift';
import styles from './styles';

var NewSchData = [];

class DropDown extends React.Component {
    constructor(props) {
    super(props);    
  } 

    onChangeOption=(e)=>{
       e.preventDefault();
      // alert (this.props.day + ' ' + e.target.value + ' '+ this.props.user  + ' '+ this.props.date  + ' '+  this.props.shift);
        NewSchData = [{'id'  : this.props.id ,'date' : this.props.date, 'name': this.props.user, 'shift' : this.props.shift, 'day' : this.props.day, 'val' : e.target.value}];

       // console.log('NewSchData - ' + NewSchData);
        this.props.onChange1(NewSchData);
  }

  render() {
        let options = [
            { value: 'H', label: 'H' },
            { value: 'O', label: 'O' },
            { value: 'A', label: 'A' }
        ];

        const { selectedItem, user,  date, shift, day, blockClasses, onChange1, id} = this.props;
        var selItem = selectedItem;
        // this.props.onChange1(NewSchData);
        return ( <select onChange={this.onChangeOption} >
                  {
                    options.map(function (item) {
                        if (selItem === item.value)
                        return <option value={item.value } selected classes={blockClasses}>{item.label}</option>;
                      else
                        return <option value={item.value } classes={blockClasses}>{item.label}</option>;
                        })
                    })
                }
            </select> 
        )
      }
    }

class ShiftRota extends Component {
constructor(props) {
    super(props);
  }

  render ()
  {
    const { user,  date, shift, day, classes, onChange1} = this.props;
    //this.setState({NewScheduleData : onChange1});
    //console.log ('edit cell shift : ' + shift)
    return (
      <Shift user={user} date={date} shift={shift} day={day}> 
        {({ loading, error, data, id }) => {
          if (loading) return <td>Loading...</td>;
          if (error) return <td>Error...</td>;

          //console.log('editrota ->' + id);

          const blockClasses = classNames({
            [classes.rotaBlock]: true//,
            //[classes[data]]: true,
          });        
          let selectedOption = data;
         // let id = key;
            return (            
                      <DropDown selectedItem = {selectedOption} user={user} date={date} shift={shift} day ={day}
                          blockClasses= {blockClasses} onChange1={onChange1} id={id}>
                    </DropDown>
            );
        } }
    </Shift> )
}
}

class EditRotaGridCell extends Component {
  constructor(props) {
    super(props);
  }

  render ()
  {
    const { user, shift, dateKey, day, key, classes, onChange1} = this.props;
    return (
        <ShiftRota  user={user} date={dateKey} shift={shift}  
              classes = {classes} day ={day} onChange1={onChange1} />
    
    )
  }
}

EditRotaGridCell.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  user: PropTypes.string.isRequired,
  dateKey: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
};

export default (withStyles(styles)(EditRotaGridCell));


//export default withStyles(styles)(EditRotaGridCell);

/*const EditRotaGridCell = ({
  classes,
  user,
  dateKey,
  shift,
  onChange
}) => (
  <Shift user={user} date={dateKey} shift={shift}>
    {({ loading, error, data }) => {
      if (loading) return <td>Loading...</td>;
      if (error) return <td>Error...</td>;

      const blockClasses = classNames({
        [classes.rotaBlock]: true,
        [classes[data]]: true,
      });
    
      let selectedOption = data;
      return (
        <td><a className={blockClasses}></a>
            <DropDown selectedItem = {selectedOption} 
                  user={user} date={dateKey} shift={shift}
                  onChange={onChange}
            >
            </DropDown>
        </td>
        );
    } }
  </Shift>
);

EditRotaGridCell.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  user: PropTypes.string.isRequired,
  dateKey: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
};


export default withStyles(styles)(EditRotaGridCell);
*/
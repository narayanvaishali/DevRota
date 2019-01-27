import { Component } from 'react';
import PropTypes from 'prop-types';
import { database } from '../../db';
import moment from 'moment';

class ShiftCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: null,
      id : null,
      temp : 0
    };

    this.referenceData = this.referenceData.bind(this);
  }

  componentWillMount() { 
    this.referenceData(null);   
  }

  componentWillReceiveProps(nextProps) {
    this.referenceData(nextProps.date);
  }
  componentWillUnmount() {
    //database.ref.off('value');
  }

  referenceData(thedate) {
    var {classes, user, shift, month, year,date, day,days} = this.props;
     var newdt = (thedate === null || thedate === undefined) ? date : thedate;

     var  matchingKey, snapshotexists = false; 
     var noData = false;
     let currentComponent = this;

      database.ref("schedules").once("value", snapshot => {
      var sch = snapshot.val();   
      matchingKey = Object.keys(sch).find(key => (sch[key].name === user && sch[key].date === newdt &&  sch[key].day === day));
                 // console.log('matchingKey : '+ matchingKey);

       if (matchingKey != undefined){
          database.ref(`schedules/${matchingKey}`).once("value", snapshot => {
           const filerted = snapshot.val();

          if (filerted != undefined){
                  this.setState({
                     data: shift === 'AM' ? filerted.shift_AM : shift === 'PM' ?  filerted.shift_PM : 'O',
                    id : matchingKey,
                    loading: false,
                }); 
              }
            });
          }
           else{
                 this.setState({
                    data: 'O',
                    id : null,
                    loading: false
              }); 
           }
        });
  }

  render() {
    var { loading, error, data, id } = this.state;
    var { children } = this.props;
    return children({
      loading,
      error,
      data,
      id
    }) || null;
  }
}

ShiftCell.propTypes = {
  user: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default ShiftCell;

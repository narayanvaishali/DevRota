import { Component } from 'react';
import PropTypes from 'prop-types';
import { database } from '../../db';

class ShiftCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: null,
      id : null
    };
  }

  componentDidMount() {
    this.referenceData();
  }

  componentWillUnmount() {
    //database.ref.off('value');
  }

  referenceData() {
     const { user, date, day, shift} = this.props;
     var  matchingKey; 

     database.ref("schedules").once("value", snapshot => {
        const sch = snapshot.val();
         matchingKey = Object.keys(sch).find(key => (sch[key].name === user && sch[key].date === date &&  sch[key].day === day));

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
      });
  }

  render() {
    const { loading, error, data, id } = this.state;
    const { children } = this.props;
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

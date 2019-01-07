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

          database.ref("schedules").once("value", snapshot => {
          const sch = snapshot.val();

          //console.log('sch ' + Object.keys(sch));
          const list = Object.keys(sch).map(id => {
          //  console.log('sch ' + sch[id].date);
          let _key = id;
          let _date  = sch[id].date;
          let _day  = sch[id].day;
          let  _name =sch[id].name;
          let  _shift_AM = sch[id].shift_AM; 
          let _shift_PM  = sch[id].shift_PM;

          this.setState({
            data: shift == 'AM' ? _shift_AM : _shift_PM ,
            id : id,
            loading: false,
           });
      //  console.log('state : '+ this.state.id);
    });
   // done(list);
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

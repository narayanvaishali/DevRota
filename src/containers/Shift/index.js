import { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { database } from '../../db';

class ShiftCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: null,
      id: null,
      temp: 0,
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
    // database.ref.set(null);
  }

  referenceData(thedate) {
    const {
      classes, user, shift, month, year, date, day, days,
    } = this.props;
    const newdt = (thedate === null || thedate === undefined) ? date : thedate;

    let matchingKey; const
      snapshotexists = false;
    const noData = false;
    const currentComponent = this;

    database.ref('schedules').once('value', (snapshot) => {
      const sch = snapshot.val();
      matchingKey = Object.keys(sch).find(key => (sch[key].name === user && sch[key].date === newdt && sch[key].day === day));
      // console.log('matchingKey : '+ matchingKey);

      if (matchingKey != undefined) {
        database.ref(`schedules/${matchingKey}`).once('value', (snapshot) => {
          const filerted = snapshot.val();

          if (filerted != undefined) {
            if (shift === 'AM') {
              this.setState({
                data: filerted.shift_AM,
                id: matchingKey,
                loading: false,
              });
            } else {
              this.setState({
                data: filerted.shift_PM,
                id: matchingKey,
                loading: false,
              });
            }
          }
        });
      } else {
        this.setState({
          data: 'O',
          id: null,
          loading: false,
        });
      }
    });
  }

  render() {
    const {
      loading, error, data, id,
    } = this.state;
    const { children } = this.props;
    return children({
      loading,
      error,
      data,
      id,
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

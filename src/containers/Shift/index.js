import { Component } from 'react';
import PropTypes from 'prop-types';

import db from '../../db';

class ShiftCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: null,
    };
  }

  componentDidMount() {
    this.referenceData();
  }

  componentWillUnmount() {
    this.dataRef.off('value');
  }

  referenceData() {
    const { user, date, shift } = this.props;

    this.dataRef = db.ref(`/schedules/${user}/${date}/${shift}`);
    this.dataRef.on('value', (snap) => {
      this.setState({
        data: snap.val(),
        loading: false,
      });
    });
  }

  render() {
    const { loading, error, data } = this.state;
    const { children } = this.props;
    return children({
      loading,
      error,
      data,
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

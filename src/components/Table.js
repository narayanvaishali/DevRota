import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      materials: props.data,
    };
  }

  handleChange(index, dataType, value) {
    const { materials } = this.state;
    const newState = materials.map((item, i) => {
      if (i === index) {
        return { ...item, [dataType]: value };
      }
      return item;
    });

    this.setState({
      materials: newState,
    });
  }

  render() {
    const { materials } = this.state;
    const displayColData = day => (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th />
            <th>{day}</th>
            <th />
          </tr>
          <tr>
            <th />
            <th>AM</th>
            <th>PM</th>
          </tr>
        </thead>
        <tbody>
          {materials
            .filter(m => m.day === day)
            .map(row => (
              <tr>
                <td>{row.name}</td>
                <td>{row.shift_AM}</td>
                <td>{row.shift_PM}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
    return (
      <tr>
        <td>{displayColData(4)}</td>
        <td>{displayColData(10)}</td>
      </tr>
    );
  }
}

Table.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line
};

export default Table;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Layout from '../Layout';
import RotaGrid, { RotaGridHeader, RotaGridRow } from '../../components/RotaGrid';
import styles from './styles';

const getMonthDays = (year, month) => {
  const date = new Date(year, month - 1, 1);
  const result = [];
  while (date.getMonth() === month - 1) {
    result.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return result;
};

const Rota = ({ month, year }) => {
  const staffList = [
    'VP',
    'TT',
    'FG',
    'SF',
  ];

  const days = getMonthDays(year, month);

  return (
    <Layout title="Rota" drawer="true">
      <Fragment>
        <h1>
          {month}
          -
          {year}
        </h1>
        <div style={{ width: '1200px', overflow: 'scroll' }}>
          <RotaGrid users={staffList} days={days} />
        </div>
      </Fragment>
    </Layout>
  );
};


Rota.defaultProps = {
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
};

Rota.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
};

export default withStyles(styles)(Rota);

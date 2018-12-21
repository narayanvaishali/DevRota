import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Layout from '../Layout';
import RotaGrid from '../../components/RotaGrid';
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
      <Grid container justify="center">
        <h1>
          {month}
          -
          {year}
        </h1>
        <div style={{ width: '100%', overflow: 'scroll' }}>
          <RotaGrid users={staffList} days={days} />
        </div>
      </Grid>
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

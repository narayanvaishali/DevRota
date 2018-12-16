import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Layout from '../Layout';
import Shift from '../../containers/Shift';

const getMonthDays = (year, month) => {
  const date = new Date(year, month - 1, 1);
  const result = [];
  while (date.getMonth() === month - 1) {
    result.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return result;
};

const renderShifts = (user, date) => {
  const shifts = ['AM', 'PM'];
  return (
    <Grid container>
      {
        shifts.map(shift => (
          <Grid item>
            <Shift user={user} date={moment(date).format('YYYYMMDD')} shift={shift}>
              {({ loading, error, data }) => {
                if (loading) return <Paper>Loading...</Paper>;
                if (error) return 'Error...';
                return <Paper>{data}</Paper>;
              } }
            </Shift>
          </Grid>
        ))
      }
    </Grid>
  );
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

        <Grid container>
          <Grid item>Name</Grid>
          {days.map(day => (
            <Grid item>
              {moment(day).format('DD')}
            </Grid>
          ))}
        </Grid>
        {staffList.map(staff => (
          <Grid container>
            <Grid item>{staff}</Grid>
            {days.map(day => (
              <Grid item>
                {renderShifts(staff, day)}
              </Grid>
            ))}
          </Grid>
        ))}
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

export default Rota;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

import Layout from '../Layout';
import RotaGrid from '../../components/RotaGrid';
import styles from './styles';
import { Link } from 'react-router-dom';

const getMonthDays = (year, month) => {
  const date = new Date(year, month, 1);
  const result = [];
  while (date.getMonth() === month) {
    result.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return result;
};
/*
const getWeekDays = (year, month) => {
    var startDate = moment([year, month])
    var firstDay = moment(startDate).startOf('month');
    var endDay = moment(startDate).endOf('month');

    //# Create a range for the month we can iterate through
    var monthRange = moment.range(firstDay, endDay)

    //# Get all the weeks during the current month
    var weeks = [];
      for (let mday of monthRange.by('days')) {
        if (weeks.indexOf(mday.week()) === -1) {
          weeks.push(mday.week());
        }
      }
    var startOfWeek = moment().startOf('isoWeek');
    var endOfWeek = moment().endOf('isoWeek');

    var days = [];
    var day = startOfWeek;

    while (day <= endOfWeek) {
        days.push(day.toDate());
        day = day.clone().add(1, 'd');
    }

    return days;
};
*/
class WeeklyView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    };
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  handleNavigation(offset) {
    this.setState((prev) => {
      const newDate = moment().year(prev.year).month(prev.month).date(1)
        .add(offset, 'M');
      return {
        month: newDate.month(),
        year: newDate.year(),
      };
    });
  }

  render() {
    const { month, year } = this.state;
    const { classes } = this.props;
    const staffList = [
      'VP',
      'TT',
      'FG',
      'SF',
    ];

    const days = getMonthDays(year, month);
  //  const days = getWeekDays(year, month);
    const monthName = moment.months(month);
    return (
      <Layout title="Rota" drawer="true">
        <Paper>
          <Grid container justify="space-between" className={classes.titleContainer}>
            <Grid item>
              <h3 className={classes.calendarTitle}>
                {monthName}
                {' '}
                {year}
              </h3>
            </Grid>
            <Grid item>
              <Fab
                size="small"
                color="secondary"
                aria-label="Previous"
                className={classes.buttonMargin}
                onClick={() => this.handleNavigation(-1)}
              >
                <ChevronLeft />
              </Fab>
              <Fab
                size="small"
                color="secondary"
                aria-label="Next"
                className={classes.buttonMargin}
                onClick={() => this.handleNavigation(1)}
              >
                <ChevronRight />
              </Fab>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <div className={classes.rotaScroller}>
              <RotaGrid users={staffList} days={days} />
            </div>
          </Grid>
        </Paper>
      </Layout>
    );
  }
}

export default withStyles(styles)(WeeklyView);

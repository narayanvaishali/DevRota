import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Layout from '../Layout';
import RotaGrid from '../../components/RotaGrid';
import styles from './styles';

const getMonthDays = (year, month) => {
  const date = new Date(year, month, 1);
  const result = [];
  while (date.getMonth() === month) {
    result.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return result;
};

class EditMonthlyView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    };
    this.handleNavigation = this.handleNavigation.bind(this);
    this.handleEditRota = this.handleEditRota.bind(this);
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
    const {
      month,
      year,
    } = this.state;
    const { classes } = this.props;
    const staffList = [
      'VP',
      'TT',
      'FG',
      'SF',
    ];

    const days = getMonthDays(year, month);
    const monthName = moment.months(month);
    const { history } = this.props;
    return (
      <Layout title="Edit Rota  ----" drawer="true">
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
              <Button
                variant="fab"
                aria-label="Edit"
                className={classes.button}
                mini
                color="primary"
                onClick={() => this.handleEditRota(year, month)}
              />
            </Grid>
            <Grid item>
              <Button
                className={classes.addButton}
                variant="fab"
                mini
                aria-label="Save"
                color="primary"
                onClick={() => history.push('/staffs/add')}
              />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <div className={classes.rotaScroller}>
              <RotaGrid users={staffList} days={days} show="E" />
            </div>
          </Grid>
        </Paper>
      </Layout>
    );
  }
}

EditMonthlyView.propTypes = {
  classes: PropTypes.shapeOf({ }).isRequired,
  history: PropTypes.func.isRequired,
};

export default withStyles(styles)(EditMonthlyView);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import styles from './styles';
import RotaGrid from '../../components/RotaGrid';
import Layout from '../Layout';
import { database } from '../../db';

let clonedArr = [];
const db = database;

class MonthlyView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      isEdit: false,
      show: 'V',
    };
    this.handleNavigation = this.handleNavigation.bind(this);
    this.handleEditRota = this.handleEditRota.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onChange1 = this.onChange1.bind(this);
  }

  componentWillUnmount() {
    database.ref.set(null);
  }

  onChange1(newData) {
    this.clonedArr.push(...newData);
  }

  getMonthDays = (year, month) => {
    const date = new Date(year, month, 1);
    const result = [];
    while (date.getMonth() === month) {
      result.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return result;
  };

  handleNavigation = (offset) => {
    this.setState((prevState) => {
      const newDate = moment().year(prevState.year).month(prevState.month).date(1)
        .add(offset, 'M');
      return {
        month: newDate.month(),
        year: newDate.year(),
        isEdit: false,
        show: 'V',
      };
    });
  }

  handleSave = () => {
    const updateRota = (id, value, shift, done) => {
      if (shift === 'AM') {
        db.ref(`schedules/${id}`)
          .update({ shift_AM: value })
          .then(() => { done(false); })
          .catch((err) => {
            done(err, undefined);
          });
      } else {
        db.ref(`schedules/${id}`)
          .update({ shift_PM: value })
          .then(() => { done(false); })
          .catch((err) => {
            done(err, undefined);
          });
      }
    };

    const addSchedule = (arr, done) => {
      arr.forEach((sch) => {
        db.ref('schedules')
          .push(sch)
          .then(res => done(false, res))
          .catch(err => done(err, undefined));
      });
    };

    let filtered; let
      idx;
    const result = [];

    clonedArr.forEach((elem) => {
      if ((elem.id != null) || (elem.id !== undefined)) {
        filtered = clonedArr.filter(hero => hero.id === elem.id);
        if (filtered !== undefined) {
          filtered.forEach((e) => {
            updateRota(e.id, e.val, e.shift, (err, response) => {
              console.log(err, response); // eslint-disable-line
            });
          });
        }
      } else {
        idx = -1;
        // TODO: logic within the loop is complex... needs to be simplified
        for (let i = 0; i < clonedArr.length; i++) { // eslint-disable-line
          if ((elem.name === clonedArr[i].name && elem.date === clonedArr[i].date && elem.day === clonedArr[i].day && elem.shift !== clonedArr[i].shift)) { // eslint-disable-line
            idx = result.findIndex(x => (x.name === clonedArr[i].name && x.date === clonedArr[i].date && x.day === clonedArr[i].day)); // eslint-disable-line
            if (idx !== -1) {
              if (elem.shift === 'AM') result[idx].shift_AM = elem.val;
              else result[idx].shift_PM = elem.val;
            } else if (elem.shift === 'AM') {
              result.push({
                id: null,
                date: elem.date,
                name: elem.name,
                day: elem.day,
                shift_AM: elem.val,
                shift_PM: clonedArr[i].val,
              });
            } else {
              result.push({
                id: null,
                date: elem.date,
                name: elem.name,
                day: elem.day,
                shift_PM: elem.val,
                shift_AM: clonedArr[i].val,
              });
            }
          }
        }
      }
    });
    if (result !== undefined) {
      addSchedule(result, () => { });
    }

    const { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
      show: isEdit ? 'E' : 'V',
    });
  }

  handleEditRota() {
    const { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
      show: isEdit ? 'E' : 'V',
    });
  }

  handleCancel() {
    clonedArr = [];
    const { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
      show: isEdit ? 'E' : 'V',
    });
  }

  render() {
    const {
      month,
      year,
      show,
    } = this.state;
    const { classes } = this.props;
    const staffList = [
      'VP',
      'TT',
      'FA',
      'PA',
    ];
    let days = '';
    days = this.getMonthDays(year, month);

    const monthName = moment.months(month);
    return (
      <Layout title="Rota" drawer="true">
        <Paper>
          {show === 'V'
            ? (
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
                    onClick={() => this.handleEditRota()}
                  >
                    <EditIcon />
                  </Button>
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
            )
            : (
              <Grid container justify="space-between" className={classes.titleContainer}>
                <Grid item>
                  <h3 className={classes.calendarTitle}>
                    {monthName}
                    {' - '}
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
                    onClick={() => this.handleEditRota()}
                  >
                    <EditIcon />
                  </Button>
                </Grid>
                <Grid item>
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="Previous"
                    className={classes.buttonMargin}
                    onClick={() => this.handleSave()}
                  >
                    <SaveIcon />
                  </Fab>
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="Next"
                    className={classes.buttonMargin}
                    onClick={() => this.handleCancel()}
                  >
                    <CancelIcon />
                  </Fab>
                </Grid>
              </Grid>
            )
          }
          <Grid container justify="left">
            <div className={classes.rotaScroller}>
              <RotaGrid
                users={staffList}
                days={days}
                show={show}
                onChange1={this.onChange1}
                month={month}
                year={year}
              />
            </div>
          </Grid>
        </Paper>
      </Layout>
    );
  }
}

MonthlyView.propTypes = {
  classes: PropTypes.shapeOf({}).isRequired,
};

export default (withStyles(styles)(MonthlyView));

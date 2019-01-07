import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Button from "@material-ui/core/Button";
import Layout from '../Layout';

import RotaGrid from '../../components/RotaGrid';
import styles from './styles';
import { Link } from 'react-router-dom';
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon  from "@material-ui/icons/Save";

const Child = () => (
<div className='modal'>
      Hello, World!
  </div>
)


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
      isEdit : false,
      values: [
            { name: 'H', id: 'H' },
            { name: 'O', id: 'O' },
            { name: 'A', id: 'A' }
        ]
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
  handleEditRota(year, month) {
  /*this.setState({
      isEdit: !this.state.isEdit
    })*/
  }
  render() {
    const { month, year,isEdit,values } = this.state;
    const { classes } = this.props;
    const staffList = [
      'VP',
      'TT',
      'FG',
      'SF',
    ];


    const days = getMonthDays(year, month);
    const monthName = moment.months(month);
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
                      >
                          </Button>
            </Grid>
            <Grid item>
                <Button
                    className={classes.addButton}
                    variant="fab"
                    mini
                    aria-label="Save"
                    color="primary"
                    onClick={() => this.props.history.push("/staffs/add")}
                  >
              </Button>              
            </Grid>
          </Grid>
          <Grid container justify="center">
            <div className={classes.rotaScroller}>
              <RotaGrid users={staffList} days={days} show ='E'/>
            </div>
          </Grid>
        </Paper>
      </Layout>
    );
  }
}

export default withStyles(styles)(EditMonthlyView);

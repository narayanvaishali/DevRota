import React, { Component, Fragment } from 'react';
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
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import EditMonthlyView from './EditMonthlyView';
import { database } from '../../db';


var clonedArr= [];
const Child = () => (
<div className='modal'>
      Hello, World!
  </div>
)

const LayoutDisplay = () => (
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

class MonthlyView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      isEdit : false,
      show : 'V',
      newscheduledata : []
    };
    this.handleNavigation = this.handleNavigation.bind(this);
    this.handleEditRota = this.handleEditRota.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onChange1 = this.onChange1.bind(this);
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
    this.setState({
        isEdit: !this.state.isEdit
      })
    this.state.isEdit ? this.setState ({ show : 'E'}) : this.setState ({ show : 'V'});
  }
  onChange1(newData) {
    //console.log('newData '+ newData);
    clonedArr.push(...newData);
  }



  handleSave  = () => {


    let id;
    let schedule;
      schedule = {
        key : '',
        date : '',
        day : '',
        name : '',
        shift_AM : '',
        shift_PM : ''
      };

    clonedArr.forEach(function(elem) {
        id = elem.id;

        schedule = {
          key : elem.id,
          date : elem.date,
          day: elem.day,
          name: elem.name,
          shift_AM: elem.shift == 'AM' ? elem.val : 'O',
          shift_PM: elem.shift == 'PM' ? elem.val : 'O'
        };
        
       database.ref(`/schedules/${id}`)
          .update(schedule)
          .then(res => console.log(res))
          .catch(err => console.log(err));
          }  
      ); 
      this.setState({
          isEdit: !this.state.isEdit
       })
      this.state.isEdit ? this.setState ({ show : 'E'}) : this.setState ({ show : 'V'});       
 }

 

 handleCancel(){
   this.setState({
        isEdit: !this.state.isEdit
      })
    this.state.isEdit ? this.setState ({ show : 'E'}) : this.setState ({ show : 'V'});
 }

  render() {
    const { month, year,isEdit,values,show } = this.state;
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
      
      <Layout title="Rota" drawer="true">
        <Paper>          
           {this.state.show === 'V' ? 
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
           :
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
                onClick={() => this.handleEditRota(year, month)}
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
          }
          <Grid container justify="center">
            <div className={classes.rotaScroller}>
              <RotaGrid users={staffList} days={days} show ={show} onChange1={this.onChange1}
              />
            </div>
          </Grid>         
        </Paper>
      </Layout>
    );
  }
}

//export default  withStyles(styles)(MonthlyView);

export default  (withStyles(styles)(MonthlyView));

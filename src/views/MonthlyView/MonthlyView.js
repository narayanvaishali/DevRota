import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import styles from './styles';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import RotaGrid from '../../components/RotaGrid';
import Layout from '../Layout';
//import EditMonthlyView from './EditMonthlyView';
import { database } from '../../db';

var clonedArr = [];
var days = '';

const db = database;

class MonthlyView extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      isEdit : false,
      show : 'V',
      offset : 0,
      days : [],
      newscheduledata : []
    };
    this.handleNavigation = this.handleNavigation.bind(this);
    this.handleEditRota = this.handleEditRota.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onChange1 = this.onChange1.bind(this);
  }

  componentWillUnmount() {
   // database.ref.set(null);
    this.forceUpdate();
   }

   componentDidMount(){
        this.forceUpdate();
   }

 getMonthDays = (year, month) => {
  var date = new Date(year, month, 1);

  var result = [];
  while (date.getMonth() === month) {
    result.push(new Date(date));
    date.setDate(date.getDate() + 1);    
  }
  return result;
};

handleNavigation = (offset) => {
  this.setState((prevState) => {
  var newDate = moment().year(prevState.year).month(prevState.month).date(1).add(offset, 'M');
   return {  month: newDate.month(),
        year: newDate.year(),
        isEdit : false,
        show : 'V'}
  })
}

handleEditRota() {
    this.setState({
        isEdit: !this.state.isEdit
      });
    this.state.isEdit ? this.setState ({ show: 'E' }) : this.setState ({ show: 'V' });
  }
  onChange1(newData) {
      clonedArr.push(...newData);
  }

  handleSave  = () => {
     //console.log('clonedArr save : ' + JSON.stringify(clonedArr));

    var getMatchingKey = (user,date,day,shift,val) => {
        //console.log('here func : ' + user + ' '+ date + ' '+ day);
        
        var matchingKey;
          database.ref('schedules').once('value', snapshot => {
              var sch = snapshot.val();   
               if(shift === 'AM')
               {
                    matchingKey = Object.keys(sch).find(key => (sch[key].name === user && sch[key].date === date && sch[key].day === day && sch[key].shift_AM != val));  
               }
              else{
                    matchingKey = Object.keys(sch).find(key => (sch[key].name === user && sch[key].date === date && sch[key].day === day && sch[key].shift_PM != val));  
                  }
          });  
            return matchingKey;            
    }
    var getScheduledata = (id, done) => {
      db.ref(`schedules/${id}`).once('value', snapshot => {
        const schedule = snapshot.val();
        done(schedule);
      });
    }
    var  updateRota  = (id, value, shift, done) => {
      if (shift === 'AM'){  db.ref(`schedules/${id}`)
                .update({"shift_AM" : value
                })
                .then(res =>{done(false)})
                .catch(err => {
                  done(err, undefined);
                });
      }
      else {db.ref(`schedules/${id}`)
                .update({"shift_PM" : value
                })
                .then(res =>{done(false)})
                .catch(err => {
                  done(err, undefined);
                });
      }
    }

    var  addSchedule  = (arr, done) => {

      for (var i=0; i<arr.length; i++) {
        db.ref(`schedules`)
        .push(arr[i])
        .then(res => done(false, res))
        .catch(err => done(err, undefined));
      }
    }

    var filtered,  idx, updateDt;
    var result = [];

        clonedArr.forEach(function(elem) {
          if((elem.id != null) || (elem.id != undefined))  
          {
                filtered =  clonedArr.filter(function(hero) {
                  return hero.id == elem.id ;
                });
                if (filtered !== undefined) {
                    filtered.forEach(function(e) {
                       updateDt = updateRota(e.id, e.val, e.shift, (err, response) => {
                            //console.log(response);
                          });
                    }) 
                }
          }
          else{
                      idx = -1;
                      //console.log('result : ' + JSON.stringify(result));
                      for (var i=0; i<clonedArr.length; i++) {
                           /* for(var name in clonedArr[i]) r += name + " :: " + clonedArr[i][name] + ", "; 
                            r += "\n";*/
                      if((elem.name === clonedArr[i].name && elem.date === clonedArr[i].date && elem.day === clonedArr[i].day && elem.shift !== clonedArr[i].shift)){
                          //console.log('val  ' +  elem.val + ' shift ' + elem.shift + ' shift PM ' + clonedArr[i].shift_PM + ' shift AM ' + clonedArr[i].shift_AM  );
                          //console.log();

                          idx = result.findIndex(x => (x.name === clonedArr[i].name && x.date === clonedArr[i].date && x.day === clonedArr[i].day));
                          //console.log('idx  '+ idx);

                          if (idx != -1){
                              if(elem.shift === 'AM')
                                result[idx].shift_AM = elem.val;
                              else
                                result[idx].shift_PM = elem.val;
                          }
                          else{
                           if(elem.shift === 'AM')
                              result.push ({'id'  : null ,'date' : elem.date, 'name': elem.name, 'day' : elem.day, 'shift_AM' : elem.val, 'shift_PM' : clonedArr[i].val});
                           else
                              result.push ({'id'  : null ,'date' : elem.date, 'name': elem.name, 'day' : elem.day, 'shift_PM' : elem.val, 'shift_AM' : clonedArr[i].val});
                        }
                      }
                   }  
              }
          });   
                  if (result != undefined){
                    var a = addSchedule(result, (err, response) => {
                   // console.log(response);
               });
          }   
           this.setState({                          
               isEdit: !this.state.isEdit
           })
            this.state.isEdit ? this.setState ({ show : 'E'}) : this.setState ({ show : 'V'}); clonedArr = [];     
      }

  handleCancel(){
    clonedArr = [];
    this.setState({
          isEdit: !this.state.isEdit
        })
      this.state.isEdit ? this.setState ({ show : 'E'}) : this.setState ({ show : 'V'});
  }

  render() {
    var { month, year,isEdit,values,show } = this.state;

    var { classes } = this.props;
    const staffList = [
      'VP',
      'TT',
      'FA',
      'PA',
    ];
    //console.log (' month '+ month);
    days = [];
    days = this.getMonthDays(year, month);

  //  console.log('monthlyview days ' + JSON.stringify(days));

    var monthName = moment.months(month);
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
          }
          <Grid container justify="left">
            <div className={classes.rotaScroller}>
              <RotaGrid users={staffList} days={days} show ={show} onChange1={this.onChange1} month={month} year={year}
              />
            </div>
          </Grid>         
        </Paper>
      </Layout>
    );
  }
}

export default  (withStyles(styles)(MonthlyView));

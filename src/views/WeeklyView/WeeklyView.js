import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
//import { extendMoment } from 'moment-range'
import Layout from '../Layout';
import RotaGrid from '../../components/RotaGrid';
import styles from './styles';
import { Link } from 'react-router-dom';

var weekdays = [], days =[], wkdays=[];
var currentstartofweek = null, currentendofweek = null;
var monthName = '';

const getWeekDays = (year, month, offset) => {
  var startOfWeek, endOfWeek;

  //console.log('offset ' + offset);
  if(offset == 0) {
    startOfWeek = moment().year(year).month(month+1).startOf('isoWeek');
    endOfWeek = moment().year(year).month(month+1).endOf('isoWeek');
  }
    //console.log(startOfWeek);
    //console.log(endOfWeek);     
    var day = startOfWeek;

    while (day <= endOfWeek) {
        days.push(day.toDate());
        day = day.clone().add(1, 'd');
    }
    //console.log ('weekday ' + JSON.stringify(days));
    return days;
};

class WeeklyView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      weekdays : [],
      currentweek : 1,
      prevstartofweek : '',
      prevendofweek : ''
    };
    this.handleNavigationWk = this.handleNavigationWk.bind(this);
  }

     componentDidMount(){
        this.forceUpdate();
   }

  componentWillUnmount() {
   // database.ref.set(null);
    this.forceUpdate();
   }

handleNavigationWk = (offset) => {
 var startOfWeek, endOfWeek, weeks, newmonth, newyear;
 
   if(offset != 0) {
          weeks = offset == 1 ? 1 : -1;

          this.setState((prevState) => {            

              currentstartofweek = moment().year(prevState.year).month(prevState.month).startOf('isoWeek');
              currentendofweek = moment().year(prevState.year).month(prevState.month).endOf('isoWeek');

                //  console.log('new currentstartofweek -> ' + JSON.stringify(currentstartofweek));
                //  console.log('new currentendofweek -> ' +  JSON.stringify(currentendofweek));

                  const dayINeed = 1; // for Monday
                  const today = moment().year(prevState.year).month(prevState.month).isoWeekday();
                  //console.log(today);

                  if (today < dayINeed) { 
                    startOfWeek =  this.state.prevstartofweek == ''?
                                    moment().year(prevState.year).month(prevState.month).isoWeekday(dayINeed)
                                    :
                                    this.state.prevstartofweek;
                    endOfWeek =   this.state.prevendofweek == ''? 
                                  moment().year(prevState.year).month(prevState.month).isoWeekday(dayINeed).endOf('isoWeek')
                                  :
                                  this.state.prevstartofweek;
                  } else {

                    // otherwise, give me *next week's* instance of that same day
                     startOfWeek = this.state.prevstartofweek == ''? 
                                      moment().year(prevState.year).month(prevState.month).add(offset, 'weeks').isoWeekday(dayINeed)
                                      :
                                      this.state.prevstartofweek.add(weeks, 'weeks').isoWeekday(dayINeed);
                                  
                      endOfWeek = this.state.prevendofweek == '' ? 
                                  moment().year(prevState.year).month(prevState.month).add(offset, 'weeks').isoWeekday(dayINeed).endOf('isoWeek')
                                  :
                                  this.state.prevendofweek.add(weeks, 'weeks').isoWeekday(dayINeed).endOf('isoWeek');

                //  console.log('new startOfWeek -> ' + JSON.stringify(startOfWeek));
                //  console.log('new endOfWeek -> ' +  JSON.stringify(endOfWeek));

                  weeks  = this.state.prevstartofweek != ''? offset +  startOfWeek.diff(this.state.prevstartofweek, 'weeks')
                              :
                            offset;

                  if (this.state.prevstartofweek == '' && this.state.prevendofweek == ''){
                      this.state.prevstartofweek  = currentstartofweek ;
                      this.state.prevendofweek = currentendofweek;
                  }
                  else{
                      this.state.prevstartofweek  = startOfWeek ;
                      this.state.prevendofweek = endOfWeek;
                  }
                  this.state.month = moment(this.state.prevendofweek).format("MMMM");
                // this.state.month = moment(this.state.prevendofweek).month;
                  this.state.year = moment(this.state.prevendofweek).format("YYYY");
                   
                  //console.log('prev startOfWeek -> ' + JSON.stringify(this.state.prevstartofweek.add(weeks, 'weeks').isoWeekday(dayINeed)));
                  //console.log('prev endOfWeek -> ' +  JSON.stringify(this.state.prevendofweek.add(weeks, 'weeks').isoWeekday(dayINeed).endOf('isoWeek'))); 
                //  console.log('prev startOfWeek -> ' + JSON.stringify(moment(this.state.prevstartofweek).format("MMM")));

                 var day = startOfWeek;
                  wkdays=[];
                  this.state.weekdays = [];

                    while (day <= endOfWeek) {
                        wkdays.push(day.toDate());
                        day = day.clone().add(1, 'd');
                    }
                  // console.log ('weekday ' + JSON.stringify(wkdays));
                  }
          })
          this.setState({
                    'weekdays' : wkdays,
                    'currentweek' : weeks,
                    });
        // console.log('new days ' + JSON.stringify(this.state.weekdays));
   }
}

render() {
    var { month, year, weekdays } = this.state;
    //console.log ('weekday ' + JSON.stringify(weekdays));
     //console.log ('weekday ' + weekdays);

    const { classes } = this.props;
    
    const staffList = [
      'VP',
      'TT',
      'FG',
      'SF',
    ];

   if (this.state.weekdays == null || this.state.weekdays == undefined || this.state.weekdays == '') {
          // console.log('here...');
          weekdays = getWeekDays(year, month, 0);
          
          this.setState({
                    'weekdays' : weekdays
          });
          monthName = moment().month(new Date().getMonth()).format('MMMM');
          console.log(monthName);
   }
    else{
          monthName = month;
    }

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
                onClick={()=>this.handleNavigationWk(-1)}
              >
                <ChevronLeft />
              </Fab>
              <Fab
                size="small"
                color="secondary"
                aria-label="Next"
                className={classes.buttonMargin}
                onClick={()=> this.handleNavigationWk(1)}
              >
                <ChevronRight />
              </Fab>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <div className={classes.rotaScroller}>
              <RotaGrid users={staffList} days={weekdays} />
            </div>
          </Grid>
        </Paper>
      </Layout>
    );
  }
}

export default withStyles(styles)(WeeklyView);

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReportIcon from '@material-ui/icons/Report';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';

import styles from './styles';

const Sidebar = ({ classes }) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <div className={classes.toolbar} />
    <List>
      <ListItem
        button
        component={Link}
        to="/"
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </List>
    <List>
    <ListItem
        button
        component={Link}
        to="/monthlyview"
      >      
        <ListItemIcon>
            <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Monthly View" />
      </ListItem>
    </List>
    {/* <List>
      <ListItem button
        component={Link}
        to="/weeklyview"
       >
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Weekly View" />
      </ListItem>
      <ListItem
        button
      >
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Day View" />
      </ListItem>
    </List> 
    <List>
    <ListItem
        button
        component={Link}
        to="/data"
      >      
        <ListItemIcon>
            <StarIcon />
        </ListItemIcon>
        <ListItemText primary="generate data" />
      </ListItem>
    </List> */}
    <Divider />
    <List>
      <ListItem
        button
        component={Link}
        to="/logout"
      >
        <ListItemIcon>
          <ReportIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  </Drawer>
);

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  routerHistory: PropTypes.object.isRequired, // eslint-disable-line
}

export default withStyles(styles)(Sidebar);

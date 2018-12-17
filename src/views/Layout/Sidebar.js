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

// import { logout } from '../utils/auth';

import styles from './styles';

// const handleLogout = history => {
//   logout()
//     .then(res => {
//       if (history) history.push('/login');
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

const handleClick = (to, history) => {
  if (to && history) {
    history.push(to);
  }
};

const Sidebar = ({ classes, routerHistory }) => (
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
        to="/rota"
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button onClick={() => handleClick('/staffs', routerHistory)}>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Monthly View" />
      </ListItem>
      <ListItem button onClick={() => handleClick('/staffs', routerHistory)}>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Weekly View" />
      </ListItem>
      <ListItem
        button
        onClick={() => handleClick('/branches', routerHistory)}
      >
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Day View" />
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListItem button>
        <ListItemIcon>
          <ReportIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  </Drawer>
);

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  routerHistory: PropTypes.object.isRequired,
}

export default withStyles(styles)(Sidebar);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const EventList = ({ classes, events }) => {
  return (
    <div className={classes.root}>
      <List>
        {
          events.map(e => {
            return (
              <ListItem key={e.id}>
                <ListItemText primary={e.title} secondary={e.dates.startDateTime} />
              </ListItem>
            )
          })
        }
      </List>
    </div>
  );
}

export default withStyles(styles)(EventList);
import React from 'react'
import { Paper, withStyles, Grid, Typography } from '@material-ui/core'
import EventCard from './EventCard'

const EventsGrid = ({ classes, events }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <Typography variant='h5' align='center'>
          Events
        </Typography>
      </div>
      <Grid
        container
        spacing={16}
      >
        {
          events.map(e => {
            return (
              <Grid key={e.id} item xs={4} sm={6}>
                <EventCard
                  imageUrl={e.imageUrl}
                  title={e.title}
                />
              </Grid>
            )
        })
      }
      </Grid>
    </div>
  )
}

const styles = {
  wrapper: {
    padding: 30,
  },
  title: {
    marginBottom: 20,
  },
}

export default withStyles(styles)(EventsGrid)
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'

const EventCard = ({ imageUrl, title, classes }) => {
  return (
    <Card>
      <CardMedia
        image={imageUrl}
        className={classes.media}
      />
      <CardContent>
        <Typography variant='h6'>
          {title}
        </Typography>
      </CardContent>
    </Card>
  )
}

const styles = {
  media: {
    height: 140,
    minWidth: 280,
  }
}

export default withStyles(styles)(EventCard)
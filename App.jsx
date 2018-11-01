import React, { Component } from 'react'
import withRoot from '../withRoot'
import AppBar from '../AppBar'
import { Typography } from '@material-ui/core'
import events from '../events'
import EventGrid from '../EventGrid'
import EventList from '../EventList'
import EventSelect from '../EventSelect'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <AppBar />
        <Typography
          variant='h4'
          align='center'
        >
          Learn Material UI
        </Typography>
        <EventSelect events={events} />
        <EventList events={events} />
        <EventGrid events={events} />

      </div>
    )
  }
}

export default withRoot(App)

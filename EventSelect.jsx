import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Checkbox, TextField, InputLabel, MenuItem, FormControl, Select, FormControlLabel } from '@material-ui/core'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
})

class SimpleSelect extends React.Component {
  state = {
    eventId: '',
    filtered: false,
    filterText: '',
  }

  handleChange = event => {
    console.log('control name', event.target.name)
    const name = event.target.name
    if (name === 'filter') {
      this.setState({
        filtered: event.target.checked
      })
    } else {
      this.setState({ [name]: event.target.value })
    }
  }

  filterEvents = () => {
    const { filtered, filterText } = this.state
    const { events } = this.props
    if (filtered && filterText.length > 0) {
      return events.filter(e => e.title.startsWith(filterText))
    } else {
      return events
    }
  }

  render() {
    const { classes } = this.props

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="event-title">Event</InputLabel>
          <Select
            value={this.state.eventId}
            onChange={this.handleChange}
            inputProps={{
              name: 'eventId',
              id: 'event-title',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {
              this.filterEvents().map(e => {
                return (
                  <MenuItem key={e.id} value={e.id}>{e.title}</MenuItem>
                  )
              })
            }
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormControlLabel
            control={
              <Checkbox
                name='filter'
                checked={this.state.filtered}
                onChange={this.handleChange}
                value="filter"
              />
            }
            label='Filter'
          />
          {
            this.state.filtered
              ? <TextField
                  id="filter-text"
                  name='filterText'
                  label="Filter text"
                  className={classes.textField}
                  value={this.state.filterText}
                  onChange={this.handleChange}
                  margin="normal"
                />
              : null
          }

        </FormControl>
      </form>
    )
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleSelect)
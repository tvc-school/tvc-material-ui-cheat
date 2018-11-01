import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'


const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      light: '#ff5572',
      main: '#dc0747',
      dark: '#a30021',
      contrastText: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
  }
})

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
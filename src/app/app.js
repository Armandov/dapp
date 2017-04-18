import React from 'react'
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Router, Route, hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Home from './Home'
import ArbitrateContract from './ArbitrateContract'
import Backoffice from './Backoffice'

import '../www/styles/main.scss'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={hashHistory}>
      <Route path="/" component={Home}/>
      <Route path="/arbitrate-contract/:disputeId" component={ArbitrateContract}/>
      <Route path="/admin" component={Backoffice}/>
    </Router>
  </MuiThemeProvider>
), document.getElementById('app'))

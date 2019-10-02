import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'


import {Route, Switch} from 'react-router'
import Nav from './components/Nav';
import Main from './pages/Main';
import About from './pages/About';
import Login from './pages/Login';


const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Nav></Nav>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App

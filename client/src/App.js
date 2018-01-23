import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import NeighborhoodsPage from './components/NeighborhoodsPage'
// import User from './components/User'
// import UsersList from './components/UsersList'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={NeighborhoodsPage}/>
            {/* <Route path="/users" component={UsersList}/>
            <Route path="/users/:userId" component={User}/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

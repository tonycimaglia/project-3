import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch/*, Link */} from 'react-router-dom'
// import styled from 'styled-components'
import NavBar from './components/NavBar'
import Neighborhoods from './components/Neighborhoods'
import User from './components/User'
import UsersList from './components/UsersList'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Neighborhoods} />
            <Route path="/users/:userId" component={User}/>
            <Route path="/users" component={UsersList}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

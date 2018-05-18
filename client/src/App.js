import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch/*, Link */} from 'react-router-dom'
// import styled from 'styled-components'
import NavBar from './components/NavBar'
import Neighborhoods from './components/Neighborhoods'
import UsersPage from './components/UsersPage'
import UserProfilePage from './components/UserProfilePage'
import EditUser from './components/EditUser'
import SignUpPage from './components/SignUpPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Neighborhoods} />
            <Route exact path="/users" component={UsersPage}/>
            <Route exact path="/signUp" component={SignUpPage}/>
            <Route exact path="/users/:userId" component={UserProfilePage}/>
            <Route exact path="/users/:userId/edit" component={EditUser} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

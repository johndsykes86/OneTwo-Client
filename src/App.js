import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import axios from 'axios'

import './App.css';

import auth from './auth'
import Stadiums from './components/Stadiums'
import LogIn from './components/LogIn'
import LogOut from './components/LogOut'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import Stadium from './components/Stadium'
import Profile from './components/Profile'

class App extends Component {

state = {
  currentUser: auth.getCurrentUser()
}

setCurrentUser(){
  this.setState({
    currentUser: auth.getCurrentUser()
  })
}

logOut(){
  auth.clearToken()
  this.setState({currentUser: null})
}


  render() {
    const currentUser = this.state.currentUser
    return (
      <Router>

        <div className="App">
            <NavBar currentUser ={this.state.currentUser}/>
            <Route exact path="/stadiums" component={Stadiums}/>

            <Route path="/stadiums/:id" component={Stadium}/>
            <Route exact path={`/profile/${this.state.currentUser._id}`} component={Profile}/>
            <Route path="/profile/:id" component={Profile}/>

              <Route path='/login' render={() => (
              <LogIn onLogIn={this.setCurrentUser.bind(this)} />
            )} />

              <Route path='/logout' render={() => (
              <LogOut onLogOut={this.logOut.bind(this)} />
            )} />

        </div>

      </Router>

    );
  }
}

export default App;

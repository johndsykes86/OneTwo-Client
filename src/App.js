import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios'

import './App.css';

import auth from './auth'
import Stadiums from './components/Stadiums'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'

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
        <MuiThemeProvider>
        <div className="App">
            <NavBar />

        </div>
        </MuiThemeProvider>
      </Router>

    );
  }
}

export default App;

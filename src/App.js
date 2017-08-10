import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios'

import './App.css';

import Stadiums from './components/Stadiums'
import LogIn from './components/LogIn'

class App extends Component {

  onLogInSubmit(formData){
    axios({
      method: "POST",
      url: "http://localhost:3001/login",
      data: formData
    }).then((res)=>{
      console.log(res)
    })

  }

  render() {
    return (
      <div className="App">
          <LogIn parent={this}/>
      </div>
    );
  }
}

export default App;

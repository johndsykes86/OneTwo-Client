import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios'

import './App.css';

import Stadiums from './components/Stadiums'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Stadiums/>
      </div>
    );
  }
}

export default App;

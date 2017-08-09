// import React, {Component} from 'react'
//
// class Stadiums extends Component {
//   render(){
//     return(
//
//     )
//   }
// }
//
// export default Stadiums


import React from 'react'
import axios from 'axios'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class Stadiums extends React.Component {

  styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: 500,
      height: 450,
      overflowY: 'auto',
    },
  };

  state = {
      loading: true,
      stadiums: [],

    }

  getStadiums(){
    console.log("grabbing stadiumns from list!")
  axios({
    url: "http://localhost:3001/stadiums",
    headers: {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OThhMzkyMWYwZTUxZjgxOGMxNGY4MzMiLCJmaXJzdE5hbWUiOiJKb2huYXRob24iLCJsYXN0TmFtZSI6IlN5a2VzIiwidXNlck5hbWUiOiJtcmpzeWtlcyIsImVtYWlsIjoiam9obmRzeWtlczg2QGdtYWlsLmNvbSIsIl9fdiI6MiwiX2NoZWNrSW5zIjpbIjU5OGEzOWM0OTNlNTU0ODFhYjkwNTI0OSIsIjU5OGIyNTBkNzBiYzE1MGIzNGRjYTQyMCJdLCJpYXQiOjE1MDIzMTY1MDB9.ZCq1a73EWCPQzvVEx6iT6Rq8UMaPyw7glKb6qNzwZGc'}
  }).then((res)=>{
    console.log(res)
    this.setState({stadiums: res, loading:false})})
  }

  componentDidMount(){
    this.getStadiums()
  }

  render(){
    return(
      <div className = "stadiumsView">
        <div className = "stadiums">
          
        </div>
      </div>
    )
  }
}


/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */


export default Stadiums;

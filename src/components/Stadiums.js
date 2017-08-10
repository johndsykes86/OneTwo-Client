

import React from 'react'
import axios from 'axios'
import auth from '../auth'

class Stadiums extends React.Component {


  state = {
      loading: true,
      stadiums: [],

    }


  componentDidMount(){
    auth.getStadiums()
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

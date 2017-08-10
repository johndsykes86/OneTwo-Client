

import React from 'react'
import auth from '../auth'
import { NavLink } from 'react-router-dom'

class Stadiums extends React.Component {


  state = {
      loading: true,
      stadiums: [],

    }


  componentDidMount(){
    auth.getStadiums().then((res)=>{
      this.setState({
        stadiums: res
      })
    })

  }

  render(){
    return(
      <div className = "stadiumsView">
        <div className = "stadiums">
          {this.state.stadiums.map((stadium, index)=>{
            return(
              <div>
                <h1 key ={index}>{stadium.stadiumName}</h1>

              </div>
            )

          })}
          <h1>Did this even work</h1>
        </div>
      </div>
    )
  }
}


/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */


export default Stadiums;

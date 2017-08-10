import React from 'react'
import auth from '../auth'
import {Link} from 'react-router-dom'

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
              <div key = {index} className="stadium">
                <Link to={`/stadiums/${stadium._id}`}>{stadium.stadiumName}</Link>

              </div>
            )

          })}
        </div>
      </div>
    )
  }
}


/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */


export default Stadiums;

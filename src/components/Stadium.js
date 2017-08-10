import React from 'react'
import auth from '../auth'

class Stadium extends React.Component{
  state = {
    loading: true,
    stadium: []
  }

  componentDidMount(){
    console.log(this.props)
    auth.getStadium(this.props.match.params.id).then((res)=>{
      console.log(res)
      this.setState({
        stadium: res
      })
    })
    console.log(this.state.stadium)
  }

  render(){
    return(
      <div key={1} className="single-stadium-view">
        <h1 key={1}>{this.state.stadium.stadiumName}</h1>
        <ul>
          <li>{this.state.stadium.team}</li>
          <li>{this.state.stadium.capacity}</li>
          <li>{this.state.stadium.location}</li>
          <li>{this.state.stadium.yearBuilt}</li>
        </ul>
      </div>

    )
  }
}

export default Stadium

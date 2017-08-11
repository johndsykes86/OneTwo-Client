import React from 'react'
import auth from '../auth'
import CheckIn from '../components/CheckIn'

class Stadium extends React.Component{
  state = {
    loading: true,
    stadium: []
  }

  componentDidMount(){
    auth.getStadium(this.props.match.params.id).then((res)=>{
      this.setState({
        stadium: res
      })
    })
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
        <CheckIn parent={this}/>
      </div>

    )
  }
}

export default Stadium

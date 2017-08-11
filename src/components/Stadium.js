import React from 'react'
import auth from '../auth'
import CheckIn from '../components/CheckIn'
import ShowCheckins from '../components/ShowCheckIns'
import {Container } from 'semantic-ui-react'

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
      <Container>
      <div key={1} className="single-stadium-view">
        <h1 key={1}>{this.state.stadium.stadiumName}</h1>
        <ul>
          <li>Team: {this.state.stadium.team}</li>
          <li>Capacity: {this.state.stadium.capacity}</li>
          <li>Location: {this.state.stadium.location}</li>
          <li>Year Built: {this.state.stadium.yearBuilt}</li>
        </ul>
        <CheckIn parent={this}/>
        <ShowCheckins parent={this}/>
      </div>
    </Container>
    )
  }
}

export default Stadium

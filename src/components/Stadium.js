import React from 'react'
import auth from '../auth'
import CheckIn from '../components/CheckIn'
import ShowCheckins from '../components/ShowCheckIns'
import {Container, Image, Statistic } from 'semantic-ui-react'

class Stadium extends React.Component{
  constructor() {
    super()
    this.state = {
      loading: true,
      stadium: [],
      checkins: []
    }

  }

  componentDidMount(){
    auth.getStadium(this.props.match.params.id).then((res)=>{
      this.setState({
        stadium: res
      })
    })

    auth.getCheckins(this.props.match.params.id).then((res)=>{
      this.setState({
        checkins: res.data
       })
      })
  }

  render(){
    return(
      <Container className ="View">
        <Image src={this.state.stadium.picURL}/>
      <Container key={1} className="single-stadium-view">
        <h1 key={1}>{this.state.stadium.stadiumName}</h1>
        <Statistic.Group size="mini">

              <Statistic>
                <Statistic.Value>{this.state.stadium.team}</Statistic.Value>
                <Statistic.Label>Team</Statistic.Label>
              </Statistic>
        </Statistic.Group>
      </Container>
      <CheckIn parent={this}/>
      <ShowCheckins parent={this}/>
    </Container>
    )
  }
}

export default Stadium

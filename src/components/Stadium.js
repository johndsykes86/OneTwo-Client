import React from 'react'
import auth from '../auth'
import CheckIn from '../components/CheckIn'
import ShowCheckins from '../components/ShowCheckIns'
import {Container, Image, Statistic, Header, Divider } from 'semantic-ui-react'

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
      <Container className ="view">
        {console.log(this.state.stadium)}
        <Image src={this.state.stadium.picURL}/>
      <Container key={1} className="single-stadium-view">
        <div className="stadium-header">
          <Header as ='h1' textAlign="center" key={1}>{this.state.stadium.stadiumName}</Header>
          <Header as ='h3' textAlign="center" dividing key={2}>{this.state.stadium.team}</Header>

        </div>
        <Statistic.Group size="mini" className="stadium-stats" widths='four'>


              <Statistic>
                <Statistic.Value>{this.state.stadium.location}</Statistic.Value>
                <Statistic.Label>Location</Statistic.Label>
              </Statistic>

              <Statistic>
                <Statistic.Value>{this.state.stadium.yearBuilt}</Statistic.Value>
                <Statistic.Label>Year Built</Statistic.Label>
              </Statistic>

              <Statistic>
                <Statistic.Value>{this.state.stadium.playingSurface}</Statistic.Value>
                <Statistic.Label>Playing Surface</Statistic.Label>
              </Statistic>

              <Statistic>
                <Statistic.Value>{this.state.stadium.capacity}</Statistic.Value>
                <Statistic.Label>capacity</Statistic.Label>
              </Statistic>




        </Statistic.Group>
        <Divider/>
      </Container>
      <Header as='h3'>Check-In</Header>
      <CheckIn parent={this}/>
      <ShowCheckins parent={this}/>
    </Container>
    )
  }
}

export default Stadium

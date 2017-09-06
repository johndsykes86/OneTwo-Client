import React from 'react'
import auth from '../auth'
import {Container, Header, Icon } from 'semantic-ui-react'

class Profile extends React.Component{

  state={
    user: [],
    checkins: []
  }

  componentDidMount(){
    auth.getUser(this.props.match.params.id).then((user)=>{
      this.setState({
        user: user
      })

    })

    auth.getCheckinsByID(this.props.match.params.id).then((res)=>{
      this.setState({
        checkins: res.data
      })
      console.log(this.state.checkins)
    })
  }



  render(){

    return(
      <Container>
        <Header as='h2'>{this.state.user.userName}</Header>
        <Container>
          <Header as='h3'>Check Ins: {this.state.checkins.length}</Header>

          {this.state.checkins.map((checkin, index)=>{
            return(
            <div>
                <h4>{checkin.stadiumName}</h4>
                <h5>{checkin.team}</h5>
                <p>{checkin.comment}</p>
            </div>
          )
          })}

        </Container>
      </Container>
    )
  }
}

export default Profile

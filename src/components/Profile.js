import React from 'react'
import auth from '../auth'
import {Container, Header, Icon, Feed, Comment } from 'semantic-ui-react'

class Profile extends React.Component{

  state={
    currentUser: auth.getCurrentUser(),
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
      console.log(this.state)
    })
  }



  render(){

    return(
      <Container className='view'>
        <Header as='h1'>{this.state.user.userName}</Header>
        <Container>
          <Header as='h2'>Check Ins: {this.state.checkins.length}</Header>
          <Feed>
          {this.state.checkins.map((checkin, index)=>{
            return(
            <Feed.Event>
              <Feed.Label>
                <Icon as='i' name='soccer'/>
              </Feed.Label>
              <Feed.Content>
              <Feed.Summary>
                <Feed.User>{checkin.userName === this.state.currentUser.userName ? `You` : `${checkin.userName}`}</Feed.User> checked in at {checkin.stadiumName}
                </Feed.Summary>
                <Feed.Extra text>
                  {checkin.comment}
                </Feed.Extra>


              </Feed.Content>
            </Feed.Event>
          )
          })
        }
        </Feed>
        </Container>
      </Container>
    )
  }
}

export default Profile

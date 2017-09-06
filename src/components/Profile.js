import React from 'react'
import auth from '../auth'
import {Container, Header, Icon, Comment } from 'semantic-ui-react'

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
        <Header as='h1'>{this.state.user.userName}</Header>
        <Container>
          <Header as='h2'>Check Ins: {this.state.checkins.length}</Header>
          <Comment.Group size='large'>
          {this.state.checkins.map((checkin, index)=>{
            return(
              <Comment>
              <Comment.Content>
                <Comment.Author>{checkin.userName}</Comment.Author>
                <Comment.Metadata>{checkin.stadiumName} - {checkin.team} </Comment.Metadata>
                <Comment.Text>{checkin.comment}</Comment.Text>
              </Comment.Content>
            </Comment>
          )
          })
        }
        </Comment.Group>
        </Container>
      </Container>
    )
  }
}

export default Profile

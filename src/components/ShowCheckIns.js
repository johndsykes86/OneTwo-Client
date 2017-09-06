import React from 'react'
import auth from '../auth'
import {Link} from 'react-router-dom'
import {Comment} from 'semantic-ui-react'

class ShowCheckins extends React.Component {

  constructor() {
    super()
    this.state = {
      checkins: []
    }
  }

  componentDidMount() {
    auth.getCheckins(this.props.parent.props.match.params.id).then((res) => {
      this.setState({checkins: res.data})
    })

  }

  componentDidUpdate() {
    auth.getCheckins(this.props.parent.props.match.params.id).then((res) => {
      this.setState({checkins: res.data})
    })
  }

  comp

  render() {
    return (
      <Comment.Group size="large">
        {this.state.checkins.map((checkin, index) => {
          return (
            <Comment>
            <Comment.Content>
              <Comment.Author as={Link} to={`/profile/${checkin._userID}`}>{checkin.userName}</Comment.Author>
              <Comment.Text>{checkin.comment}</Comment.Text>
            </Comment.Content>
          </Comment>
            )
          })}
      </Comment.Group>
    )
  }

}

export default ShowCheckins

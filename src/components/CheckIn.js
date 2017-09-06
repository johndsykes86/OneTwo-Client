import React from 'react'
import auth from '../auth'

class CheckIn extends React.Component{

  state = {
    comment: ''
  }

  handleCheckInSubmit(evt){
    evt.preventDefault()
   console.log(this.props.parent.state.stadium.team)
    const formData = {
      _userID: auth.getCurrentUser()._id,
      userName: auth.getCurrentUser().userName,
      _stadiumID: this.props.parent.props.match.params.id,
      comment: this.refs.comment.value,
      stadiumName: this.props.parent.state.stadium.stadiumName,
      team: this.props.parent.state.stadium.team,
    }

    auth.postCheckin(formData).then(success=>{
      console.log(formData)
      console.log(success)
      if (success)(
        this.refs.comment.value = ''
      )
    })
  }

  render(){
    return(
     <form onSubmit={this.handleCheckInSubmit.bind(this)} className="checkin-form">
      <input type = "text" ref="comment" placeholder="Leave a comment"/>
      <input type ="submit" value="Submit"/>
     </form>
    )
  }
}

export default CheckIn

import React from 'react'
import auth from '../auth'

class CheckIn extends React.Component{

  state = {
    comment: ''
  }

  handleCheckInSubmit(evt){
    evt.preventDefault()
    console.log(this.props.parent.props)
    const formData = {
      _userID: auth.getCurrentUser()._id,
      userName: auth.getCurrentUser().userName,
      _stadiumID: this.props.parent.props.match.params.id,
      comment: this.refs.comment.value,
    }


    auth.postCheckin(formData).then(success=>{
      if (success)(
        this.refs.comment.value = ''
      )
    })
  }

  render(){
    return(
     <form onSubmit={this.handleCheckInSubmit.bind(this)}>
      <input type = "text" ref="comment" placeholder="Leave a comment about the checkin"/>
      <input type ="submit" value="Submit"/>
     </form>
    )
  }
}

export default CheckIn

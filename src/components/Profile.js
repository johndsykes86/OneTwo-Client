import React from 'react'
import auth from '../auth'
class Profile extends React.Component{

  state={
    user: []
  }

  componentDidMount(){
    auth.getUser(this.props.match.params.id).then((user)=>{
      this.setState({
        user: user
      })
    })
  }

  render(){

    {console.log(this.props.history)}
    return(
      <div>

       <h1>{this.state.user.firstName}</h1>
       <h2>{this.state.user.lastName}</h2>

      </div>
    )
  }
}

export default Profile

import React from 'react'

class LogIn extends React.Component{

 handleLogInSubmit(evt){
   evt.preventDefault()
   const formData = {
    email: this.refs.email.value,
    password: this.refs.password.value
   }
   this.props.parent.signUp(formData)

 }
  render(){
    return(
      <form onSubmit={this.handleLogInSubmit.bind(this)}>
        <input ref="email" type="text" placeholder= "Email"></input><br/>
        <input ref="password" type="password" placeholder="Password"></input><br/>
        <button>Submit</button>
      </form>

    )
  }
}

export default LogIn

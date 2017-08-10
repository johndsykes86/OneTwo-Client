import React from 'react'
import auth from '../auth'
import { Redirect } from 'react-router-dom'

class LogIn extends React.Component{

  state = {
    shouldRedirect: false
  }

 handleLogInSubmit(evt){
   evt.preventDefault()
   const formData = {
    email: this.refs.email.value,
    password: this.refs.password.value
   }
   auth.logIn(formData).then((user)=>{
     if (user){
      this.props.onLogIn()
      this.setState({shouldRedirect: true})
     }
   })

 }
 render() {
   return (
     this.state.shouldRedirect
     ? <Redirect to='/' />
     : (
       <div className="LogIn">
         <h1>Log In</h1>
         <form onSubmit={this.handleLogInSubmit.bind(this)}>
           <input ref="email" type="text" placeholder="Email" /><br/>
           <input ref="password" type="password" placeholder="Password" /><br/>
           <button>Log In</button>
         </form>
       </div>
     )
   )
 }

}

export default LogIn

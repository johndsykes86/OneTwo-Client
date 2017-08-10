import React from 'react'
import auth from '../auth'
import { Redirect } from 'react-router-dom'

class SignUp extends React.Component {
  state = {
    shouldRedirect: false
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    const formData = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      userName: this.refs.userName.value,
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    console.log("CREATING ACCOUNT...")
    console.log(formData)
    auth.signUp(formData).then(success => {
      console.log(success)
      if(success) this.setState({shouldRedirect: true})
    })
  }

  render() {
    return (
      this.state.shouldRedirect
      ? <Redirect to='/login' />
      : (
        <div className="SignUp">
          <h1>Create An Account</h1>
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <input ref="firstName" type="text" placeholder="First Name" /><br/>
            <input ref="lastName" type="text" placeholder="Last Name" /><br/>
            <input ref="userName" type="text" placeholder="User Name" /><br/>
            <input ref="email" type="email" placeholder="Email" /><br/>
            <input ref="password" type="password" placeholder="Password" /><br/>
            <button>Create Account</button>
          </form>
        </div>
      )
    )
  }
}

export default SignUp

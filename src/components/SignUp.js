import React from 'react'
import auth from '../auth'
import {Redirect} from 'react-router-dom'
import {Form, Header, Container, Segment, Message} from 'semantic-ui-react'

class SignUp extends React.Component {
  state = {
    shouldRedirect: false,
    failedtoSignUp: ''
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
      if (success){
      console.log(success)
        this.setState({failedtoLogIn:false, shouldRedirect:true})
      }
      }).catch((error)=>{
        console.log(error)
        this.setState({failedtoLogIn:true, shouldRedirect:false})
      })
      console.log(this.state)
  }

  render() {
    return (!this.state.shouldRedirect
      ? <div className="SignUp">
        <Header as='h1'>Create An Account</Header>
        <Container textAlign="center">
          {!this.state.shouldRedirect && this.state.failedtoLogIn ? <Message attached error header="We were unable to sign you up for some reason, please make sure all fields are filled out and try again."/>: <Message attached info header="Fill out the form below to sign-up for a new account"/>}
          <Form className='attached' onSubmit={this.handleFormSubmit.bind(this)}>
            <Segment inverted>
            <Form.Field widths="equal">
              <input ref="firstName" type="text" placeholder="First Name"/><br/>
            </Form.Field>

            <Form.Field widths="equal">
              <input ref="lastName" type="text" placeholder="Last Name"/><br/>
            </Form.Field>

            <Form.Field widths="equal">
              <input ref="userName" type="text" placeholder="User Name"/><br/>
            </Form.Field>

            <Form.Field widths="equal">
              <input ref="email" type="text" placeholder="Email"/><br/>
            </Form.Field>

            <Form.Field widths="equal">
              <input ref="password" type="password" placeholder="Password"/><br/>
            </Form.Field>

            <Form.Button>Create Account</Form.Button>
            </Segment>
        </Form>
        </Container>

      </div>
      : (
        <Redirect to='/login'/>
      )
    )
  }
}

export default SignUp

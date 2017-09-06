import React from 'react'
import auth from '../auth'
import {Redirect} from 'react-router-dom'
import { Container, Button, Message, Form, Segment, } from 'semantic-ui-react'

class LogIn extends React.Component {

  state = {
    shouldRedirect: false,
    failedtoLogIn: false
  }

  handleLogInSubmit(evt) {
    evt.preventDefault()
    const formData = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    auth.logIn(formData).then((user) => {
      console.log(user)
      if (user) {
        this.props.onLogIn()
        this.setState({shouldRedirect: true, failedtoLogIn:false})
      } else {
        this.setState({shouldRedirect: false, failedtoLogIn:true})
      }
      console.log(this.state)
    })

  }
  render() {
    return (this.state.shouldRedirect
      ? <Redirect to='/'/>
    : (

        <Container>
          {!this.state.shouldRedirect && this.state.failedtoLogIn ? <Message attached error header="We were unable to log you in. Please check your email and password"/>: <Message attached info header="Please login with your email and password."/>}
          <Form className="Success" success error onSubmit={this.handleLogInSubmit.bind(this)}>
            <Segment inverted>
            <Form.Field>
              <input ref="email" placeholder='Email'/>
            </Form.Field>
            <Form.Field>
              <input ref="password" type="password" placeholder='Password'/>
            </Form.Field>
            <Button type='submit'>Submit</Button>
            </Segment>
          </Form>

        </Container>


      ))
  }

}

export default LogIn

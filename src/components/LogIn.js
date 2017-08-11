import React from 'react'
import auth from '../auth'
import {Redirect} from 'react-router-dom'
import { Container, Button, Message, Form, Segment } from 'semantic-ui-react'

class LogIn extends React.Component {

  state = {
    shouldRedirect: false,
  }

  handleLogInSubmit(evt) {
    evt.preventDefault()
    const formData = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    auth.logIn(formData).then((user) => {
      if (user) {
        this.props.onLogIn()
        this.setState({shouldRedirect: true, failedtoLogIn:false})
      } else {
        this.setState({shouldRedirect: true, failedtoLogIn:true})
      }
    })

  }
  render() {
    return (this.state.shouldRedirect
      ? <Redirect to='/stadiums'/>
      : (

        <Container>
          <Form success error onSubmit={this.handleLogInSubmit.bind(this)}>
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

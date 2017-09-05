import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'
import auth from '../auth'

export default class NavBar extends Component {
  state = { activeItem: 'home', currentUser: auth.getCurrentUser() }



  setCurrentUser(){
    this.setState({
      currentUser: auth.getCurrentUser()
    })
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  constructor(props) {
       super(props)
    }

  render() {
    const { activeItem } = this.state.activeItem

    return (
      <div>

          {this.props.currentUser ?(
          <Menu pointing secondary>
            <Menu.Item name='Stadiums' active={activeItem === 'stadiums'} as={NavLink} to='/stadiums' onClick={this.handleItemClick} />
            <Menu.Item name='Profile' active={activeItem === 'profile'} as={NavLink} exact to= {`/profile/${this.state.currentUser._id}`} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
            <Menu.Item name='Logout' active={activeItem === 'logout'} as={NavLink} to='logout' onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu>
          ):(

            <Menu pointing secondary>
            <Menu.Item name='Sign Up' active={activeItem === 'Sign Up'} as={NavLink} to='/signup' onClick={this.handleItemClick} />
            <Menu.Item name='Sign In' active={activeItem === 'Sign In'} as={NavLink} to='/login' onClick={this.handleItemClick} />
            </Menu>

          )
        }



      </div>
    )
  }
}

import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  constructor(props) {
       super(props)
    }

  render() {
    const { activeItem } = this.state

    return (
      <div>

          {this.props.currentUser ?(
          <Menu pointing secondary>
            <Menu.Item name='Stadiums' active={activeItem === 'stadiums'} as={NavLink} to='/stadiums' onClick={this.handleItemClick} />
            <Menu.Item name='profile' active={activeItem === 'profile'} as={NavLink} to='/profile' onClick={this.handleItemClick} />
            <Menu.Item name='logout' active={activeItem === 'logout'} as={NavLink} to='logout' onClick={this.handleItemClick} />
          </Menu>
          ):(

            <Menu pointing secondary>
            <Menu.Item name='signup' active={activeItem === 'Sign Up'} as={NavLink} to='/signup' onClick={this.handleItemClick} />
            <Menu.Item name='signin' active={activeItem === 'Sign In'} as={NavLink} to='/login' onClick={this.handleItemClick} />
            </Menu>

          )
        }



      </div>
    )
  }
}

// const NavBar = (props) => {
//   return (
//     <ul className="NavBar">
//       <li><NavLink exact to='/'>Home</NavLink></li>
//       {props.currentUser
//         ? (
//           <div>
//             <li><NavLink to='/stadiums'>Stadiums</NavLink></li>
//             <li><NavLink to='/profile/'>Profile</NavLink></li>
//             <li><NavLink to='/logout'>Log Out</NavLink></li>
//           </div>
//         )
//         : (
//           <div>
//             <li><NavLink to='/login'>Log In</NavLink></li>
//             <li><NavLink to='/signup'>Sign Up</NavLink></li>
//           </div>
//         )
//       }
//     </ul>
//   )
// }

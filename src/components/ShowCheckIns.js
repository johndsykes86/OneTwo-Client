import React from 'react'
import auth from '../auth'
import {Link} from 'react-router-dom'


class ShowCheckins extends React.Component{

    constructor(){
      super()
      this.state = {
        checkins: []
      }
    }


  componentDidMount(){
    auth.getCheckins(this.props.parent.props.match.params.id).then((res)=>{
      this.setState({
        checkins: res.data
       })
      })

    }

    componentDidUpdate(){
      auth.getCheckins(this.props.parent.props.match.params.id).then((res)=>{
        this.setState({
          checkins: res.data
         })
        })
    }

    comp

  render(){
        return(
          <div>

            {this.state.checkins.map((checkin, index)=>{
            return (
              <div key ={index}>
                <Link to={`/profile/${checkin._userID}`}>{checkin.userName}</Link>
                <p>{checkin.comment}</p>
              </div>
            )
          })}


          </div>
        )
      }


}

export default ShowCheckins

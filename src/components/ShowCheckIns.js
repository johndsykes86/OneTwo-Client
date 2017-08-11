import React from 'react'
import auth from '../auth'


class ShowCheckins extends React.Component{

  state = {
    list: []
  }

  componentDidMount(){
    auth.getCheckin(this.props.parent.props.match.params.id).then((res)=>{
      console.log(res)
      this.state.list = res
      })
    }

  render(){
        return(
          <h1></h1>
        )
      }


}

export default ShowCheckins

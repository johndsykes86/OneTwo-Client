import React from 'react'
import auth from '../auth'


class ShowCheckins extends React.Component{

    constructor(){
      super()
      this.state = {
        list: []
      }
    }


  componentDidMount(){
    console.log(this.props.parent.props.match.params.id)
    auth.getCheckin(this.props.parent.props.match.params.id).then((res)=>{
      console.log(res)
      this.setState({
        list: res
       })
      })
    }

  render(){
        return(
          <h1></h1>
        )
      }


}

export default ShowCheckins

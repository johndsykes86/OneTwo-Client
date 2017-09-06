import React from 'react'
import auth from '../auth'
import {Link} from 'react-router-dom'
import chunk from 'lodash.chunk'
import {Grid, Card, Image, Container} from 'semantic-ui-react'

class Stadiums extends React.Component {

  constructor() {
    super()
    this.state = {
      loading: true,
      stadiums: []
    }

  }

  componentDidMount() {
    auth.getStadiums().then((res) => {
      this.setState({stadiums: res})
    })

  }

  render() {
    const newArr = chunk(this.state.stadiums, 3)
    return (
      <Container className="view">
      <div className="stadiums">
        <Grid columns={3}>
        {newArr.map((array, index) => (
          <Grid.Row key = {index}>
            {array.map((element, index) => (
            <Grid.Column key = {index}>
              <Card>
                <Container className = "stadiums-img">
                <Image src={element.picURL}/>
                </Container>
                <Card.Content>
                  <Card.Header>
                    <Link to={`/stadiums/${element._id}`}>{element.stadiumName}</Link>
                  </Card.Header>
                  <Card.Description>
                    {element.team}
                  </Card.Description>
                  <Card.Meta>
                    <span className='date'>
                      <p>Year Built: {element.yearBuilt}</p>
                    </span>
                  </Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>
            ))}
          </Grid.Row>
        ))}
        </Grid>
      </div>
      </Container>
    )
  }

}

export default Stadiums

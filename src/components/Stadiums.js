import React from 'react'
import auth from '../auth'
import {Link} from 'react-router-dom'
import chunk from 'lodash.chunk'
import {Grid, Card, Image, Container} from 'semantic-ui-react'

class Stadiums extends React.Component {

  constructor() {
    super();
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
    console.log(newArr)
    return (
      <Container>
      <div className="stadiums">
        <Grid columns={3}>
        {newArr.map((array, index) => (
          <Grid.Row>
            {array.map((element, index) => (
            <Grid.Column>
              <Card>
                <Image src='/assets/images/avatar/large/matthew.png'/>
                <Card.Content>
                  <Card.Header>
                    <Link to={`/stadiums/${element._id}`}>{element.stadiumName}</Link>
                  </Card.Header>
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

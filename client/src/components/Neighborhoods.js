import React, { Component } from 'react'
import axios from 'axios'
import BackgroundContainer from './styled_components/BackgroundContainer'
import NeighborhoodCard from './styled_components/NeighborhoodCard'
import PublicSpacesList from './PublicSpacesList'
import FlexRowWrap from './styled_components/FlexRowWrap'
// import { Redirect } from 'react-router-dom'

class Neighborhoods extends Component {
    // We'll set up the ideas array as an empty array to begin with
    state = {
        publicSpaces: [],
    }

    async componentWillMount() {
        const response = await axios.get('/api/publicSpaces') // When the page loads, grab all ideas from the database
        this.setState({ publicSpaces: response.data }) // Put these ideas on the state, so they will render
    }

    render() {
        return (
            <BackgroundContainer>
                <h1>Atlanta Neighborhoods:</h1>
                <NeighborhoodCard>
                    <FlexRowWrap>
                        <div>
                            Candler Park
                    </div>
                        <PublicSpacesList
                            publicSpaces={this.state.publicSpaces} />
                    </FlexRowWrap>
                </NeighborhoodCard>
                <NeighborhoodCard>Little Five Points</NeighborhoodCard>
                <NeighborhoodCard>Old Fourth Ward</NeighborhoodCard>
            </BackgroundContainer>
        )
    }
}

export default Neighborhoods
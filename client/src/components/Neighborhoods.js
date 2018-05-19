import React, { Component } from 'react'
import axios from 'axios'
import BackgroundContainer from './styled_components/BackgroundContainer'
import NeighborhoodCard from './styled_components/NeighborhoodCard'
import PublicSpacesList from './PublicSpacesList'
import FlexRowWrap from './styled_components/FlexRowWrap'

class Neighborhoods extends Component {
    state = {
        publicSpaces: [],
    }

    async componentWillMount() {
        const response = await axios.get('/api/publicSpaces')
        this.setState({ publicSpaces: response.data })
    }

    render() {
        return (
            <BackgroundContainer>
                <h1>Atlanta Neighborhoods:</h1>
                <FlexRowWrap>
                    <NeighborhoodCard>
                    <div>
                        Candler Park
                    </div>
                    {/* <div>
                        <FlexRowWrap>
                            Public Spaces:
                            <PublicSpacesList
                                publicSpaces={this.state.publicSpaces} />
                        </FlexRowWrap>
                    </div> */}
                    </NeighborhoodCard>
                    <NeighborhoodCard>Old Fourth Ward</NeighborhoodCard>
                </FlexRowWrap>
            </BackgroundContainer>
        )
    }
}

export default Neighborhoods
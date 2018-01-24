import React, { Component } from 'react'
import BackgroundContainer from './styled_components/BackgroundContainer'
// import { Redirect } from 'react-router-dom'

class Neighborhoods extends Component {
    render() {
        return (
            <BackgroundContainer>
                <h1>Atlanta Neighborhoods:</h1>
                <div>Candler Park</div>
                <div>Little Five Points</div>
                <div>Old Fourth Ward</div>
            </BackgroundContainer>
        )
    }
}

export default Neighborhoods
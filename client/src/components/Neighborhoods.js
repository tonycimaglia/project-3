import React, { Component } from 'react'
import axios from 'axios'
import BackgroundContainer from './styled_components/BackgroundContainer'
// import { Redirect } from 'react-router-dom'

class Neighborhoods extends Component {
    // We'll set up the ideas array as an empty array to begin with
    state = {
        publicSpaces: [],
    }

    async componentWillMount() {
        const response = await axios.get('/api/publicspaces') // When the page loads, grab all ideas from the database
        this.setState({ publicSpaces: response.data }) // Put these ideas on the state, so they will render
    }

    
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
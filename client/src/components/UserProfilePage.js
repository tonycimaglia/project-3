import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import BackgroundContainer from './styled_components/BackgroundContainer'
import PrivateSpaceCard from './styled_components/PrivateSpaceCard'


class UserProfilePage extends Component {
    state = {
        user: {},
        privateSpaces: []
    }

    componentWillMount() {
        this.getUser()
        this.getPrivateSpaces()
    }

    getUser = () => {

        axios.get(`/api/users/${this.props.match.params.userId}`)
            .then(res => {
                this.setState({ user: res.data })
            })
    }

    getPrivateSpaces = () => {
        axios.get(`/api/users/${this.props.match.params.userId}/privateSpaces`)
            .then(res => {
                console.log(res.data)
                this.setState({ privateSpaces: res.data })
            })
    }


    render() {
        console.log(this.props)
        return (
            <BackgroundContainer>
                <h1>{this.state.user.userName}'s page</h1>
                <Link to={`/users/${this.props.match.params.userId}/edit`}>Edit User</Link>
                <div>
                    {this.state.privateSpaces.map((privateSpace) => {
                        return (
                            <div key={privateSpace._id}>
                            <h2>Private Spaces:</h2>
                                <PrivateSpaceCard>
                                    <div>Neighborhood: {privateSpace.neighborhood}</div>
                                    <div>Description: {privateSpace.description}</div>
                                    <div>Location: {privateSpace.location}</div>
                                    <div>Hours: {privateSpace.hours}</div>
                                </PrivateSpaceCard>
                            </div>
                        )
                    })}
                </div>
            </BackgroundContainer>
        )
    }
}

export default UserProfilePage
import React, { Component } from 'react'
import axios from 'axios'

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
            <div>
                <h1>{this.state.user.userName}'s page</h1>
                <div>
                    {this.state.privateSpaces.map((privateSpace) => {
                        return (
                            <div key={privateSpace._id}>
                                <div>
                                    {privateSpace.neighborhood}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default UserProfilePage
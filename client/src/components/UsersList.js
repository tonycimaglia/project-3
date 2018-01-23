import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

class UsersList extends Component {
    state = {
        users: []
    }

    async componentWillMount() {
        const response = await axios.get('/api/users')
        this.setState({ users: response.data })
    }

    render() {
        return (
            <div>
                <h1>This is the list of Existing users:</h1>
                {this.state.users.map(user => {
                    return (<Link to={`/user/${user._id}`}>{user.userName}</Link>)
                })}
            </div>
        )
    }
}

export default UsersList
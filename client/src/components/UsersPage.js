import React, { Component } from 'react'
import axios from 'axios'

import UsersList from './UsersList'

class UserPage extends Component {

    // We'll set up the ideas array as an empty array to begin with
    state = {
        users: []
    }

    async componentWillMount() {
        const response = await axios.get('/api/users') // When the page loads, grab all ideas from the database
        this.setState({ users: response.data }) // Put these ideas on the state, so they will render
    }

    createIdea = async () => {
        const response = await axios.post(`/api/users`) // Ask the server to create a new idea in the database
        const newUser = response.data // Grab the new idea from the server

        const newUsers = [...this.state.users] // Copy the old ideas list into a new one
        newUsers.unshift(newUser) // This will add the new Idea to the beginning of the array
        this.setState({ users: newUsers }) // update the state with the new ideas list
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Users:</h1>
                    <button onClick={this.createUser}>New User</button>
                </div>
                <UsersList users={this.state.users}
                    handleChange={this.handleChange} />
            </div>
        )
    }
}

export default UserPage
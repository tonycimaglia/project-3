import React, { Component } from 'react'
import axios from 'axios'

import UsersList from './UsersList'

class UsersPage extends Component {

    // We'll set up the ideas array as an empty array to begin with
    state = {
        users: [],
        newUser: {}
    }

    async componentWillMount() {
        const response = await axios.get('/api/users') // When the page loads, grab all ideas from the database
        this.setState({ users: response.data }) // Put these ideas on the state, so they will render
    }

    createUser = async () => {
        const response = await axios.post(`/api/users`, this.state.newUser)
        const newUser = response.data
        const newUsers = [...this.state.users]
        newUsers.unshift(newUser)
        this.setState({ users: newUsers })
    }

    handleChange = (e) => {
        const newUser = { ...this.state.newUser }
        newUser[e.target.name] = e.target.value
        this.setState({ newUser })
    }

    handleSignUp = (e) => {
        e.preventDefault()
        this.createUser()
    }

    deleteUser = async (user) => {
        try {
            await axios.delete(`/api/users/${user._id}`) // Ask the server to delete this idea

            const indexToDelete = this.state.users.indexOf(user) // Determine where in our ideas array it lived
            const newUsers = [...this.state.users] // copy the old ideas list into a new one
            newUsers.splice(indexToDelete, 1) // remove the idea we deleted from this new array

            // update the state with our new ideas list, so the deleted
            // idea will no longer show up on the screen
            this.setState({ users: newUsers })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Users:</h1>
                </div>
                <UsersList
                    users={this.state.users}
                    deleteUser={this.deleteUser} />
                <div>
                    <form onSubmit={this.handleSignUp}>
                        <div>
                            <label htmlFor="userName">User Name</label>
                            <input onChange={this.handleChange} name="userName" type="text" value={this.state.userName} />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input onChange={this.handleChange} name="email" type="text" value={this.state.email} />
                        </div>

                        <input type="submit" value="New User" />
                    </form>
                </div>
            </div>
        )
    }
}

export default UsersPage
import React, { Component } from 'react'
import axios from 'axios'
import UsersList from './UsersList'
// import UserProfilePage from './UserProfilePage'
import BackgroundContainer from './styled_components/BackgroundContainer'

class UsersPage extends Component {

    // We'll set up the users array as an empty array to begin with
    state = {
        users: [],
    }

    async componentWillMount() {
        const response = await axios.get('/api/users') // When the page loads, grab all ideas from the database
        this.setState({ users: response.data }) // Put these ideas on the state, so they will render
    }

    deleteUser = async (user) => {
        try {
            await axios.delete(`/api/users/${user._id}`) // Ask the server to delete this idea

            const indexToDelete = this.state.users.indexOf(user) // Determine where in our ideas array it lived
            const newUsers = [...this.state.users] // copy the old ideas list into a new one
            newUsers.splice(indexToDelete, 1) // remove the idea we deleted from this new array

            this.setState({ users: newUsers })
        } catch (error) {
            console.log(error)
        }
    }

    handleUserChange = (user, event) => {
        const updatedUsers = [...this.state.users]
        const userToUpdate = updatedUsers.find((newUser) => {
            return newUser._id === user._id
        })
        userToUpdate[event.target.name] = event.target.value
        this.setState({ users: updatedUsers })
    }

    updateUser = async (user) => {
        try {
            await axios.patch(`/api/users/${user._id}`, user)
        } catch (error) {
            console.log(error)
        }
    }


    render() {
        // const UserProfilePageComponent = (props) => (<UserProfilePage {...props}/>)
        return (
            <BackgroundContainer>
                <UsersList
                    users={this.state.users}
                    handleUserChange={this.handleUserChange}
                    updateUser={this.updateUser}
                    deleteUser={this.deleteUser} />
            </BackgroundContainer>
        )
    }
}

export default UsersPage
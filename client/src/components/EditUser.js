import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class EditUser extends Component {

    state = {
        user: {
            userName: '',
            email: ''
        },
        redirect: false
    }

    componentWillMount() {
        this.getUser()
    }

    getUser = () => {
        axios.get(`/api/users/${this.props.match.params.userId}`)
            .then(res => {
                this.setState({ user: res.data })
            })
    }

    handleChange = (event) => {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    handleEdit = (event) => {
        event.preventDefault()
        this.updateUser()
    }

    updateUser = async (userid) => {
        try {
            await axios.patch(`/api/users/${this.state.user._id}`, this.state.user)
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <h1>Edit {this.state.user.userName}'s profile</h1>
                <form onSubmit={this.handleEdit}>
                        <div>
                            <label htmlFor="userName">First Name</label>
                            <input onChange={this.handleChange} name="userName" type="text" value={this.state.user.userName} />
                        </div>
                        <div>
                            <label htmlFor="email">Last Name</label>
                            <input onChange={this.handleChange} name="email" type="text" value={this.state.user.email} />
                        </div>
                        <input type="submit" value="Update User" />
                    </form>
            </div>
        )
    }
}

export default EditUser
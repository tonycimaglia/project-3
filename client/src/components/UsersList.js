import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FlexRowWrap from './styled_components/FlexRowWrap'
import UserCard from './styled_components/UserCard'

class UsersList extends Component {
    render() {
        return (
                <FlexRowWrap>
                    {this.props.users.map((user) => {
                        return (
                            <UserCard key={user._id}>
                                <Link to={`/users/${user._id}`}>{user.userName}</Link>
                                <button onClick={() => { this.props.deleteUser(user) }}>
                                    Delete User
                            </button>
                            </UserCard>
                        )
                    })}
                </FlexRowWrap>
        )
    }
}

export default UsersList
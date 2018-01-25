import React from 'react'
import { Link } from 'react-router-dom'
import UserProfilePage from './UserProfilePage'

const User = (props) => {
    const url = `/users/${props.user._id}`
    return (
        <div>
            <UserProfilePage user={props.user} key={props.user._id} />
            <Link to={url}><p>{props.user.userName}</p></Link>

            <input type="text"
                name="userName"
                value={props.user.userName}
                onChange={(event) => props.handleUserChange(props.user, event)}
                onBlur={() => { props.updateUser(props.user) }} />

            <button onClick={() => { props.deleteUser(props.user) }}>
                Delete User
            </button>
        </div>
    )
}

export default User
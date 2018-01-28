import React from 'react'
// import { Link } from 'react-router-dom'



const User = (props) => {
    return (
        <div>
            <p>{props.user.userName}</p>
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
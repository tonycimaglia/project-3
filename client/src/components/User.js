import React from 'react'
// import { Redirect } from 'react-router-dom'

const User = (props) => {
    return (
        <div>
            <p>{props.user.userName}</p>
            <button onClick={() => { props.deleteUser(props.user) }}>
                Delete User
            </button>
        </div>
    )
}

export default User
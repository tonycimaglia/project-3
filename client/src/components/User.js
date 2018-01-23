import React from 'react'
// import { Redirect } from 'react-router-dom'

const User = (props) => {
    return (
        <div>
                <p>{props.user.userName}</p>
        </div>
    )
}

export default User
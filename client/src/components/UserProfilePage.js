import React from 'react'

// get request axios
// maatch.props.params

const UserProfilePage = (props) => {

    return (
        <div>
            <p>I'm the user profile page</p>
            {props.userName}
        </div>
    )
}

export default UserProfilePage
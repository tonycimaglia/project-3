import React from 'react'
import User from './User'

const UsersList = (props) => {

    // We are receiving all of the methods each User needs as props
    // inside of this component, so we can pass these directly down again
    // by "spreading" the props into each User component (using the "spread
    // operator" or `...`

    // We'll pass the `user` along as well.
    return (
        <div>
            {
                props.users.map((user) => {
                    return (
                        <User user={user} {...props} key={user._id} />
                    )
                })
            }
        </div>
    )
}

export default UsersList
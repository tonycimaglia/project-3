import React from 'react'
import PublicSpace from './PublicSpace'

const PublicSpacesList = (props) => {

    // We are receiving all of the methods each User needs as props
    // inside of this component, so we can pass these directly down again
    // by "spreading" the props into each User component (using the "spread
    // operator" or `...`

    // We'll pass the `user` along as well.
    return (
        <div>
            {
                props.publicSpaces.map((publicSpace) => {
                    return (
                        <PublicSpace publicSpace={publicSpace} {...props} key={publicSpace._id} />
                    )
                })
            }
        </div>
    )
}

export default PublicSpacesList
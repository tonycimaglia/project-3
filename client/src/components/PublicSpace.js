import React from 'react'

const PublicSpace = (props) => {
    return (
        <div>
            <div>
                neighborhood:
            {props.publicSpace.neighborhood}
                description:
            {props.publicSpace.description}
                location:
            {props.publicSpace.location}
                hours:
            {props.publicSpace.hours}
            </div>
        </div>
    )
}

export default PublicSpace
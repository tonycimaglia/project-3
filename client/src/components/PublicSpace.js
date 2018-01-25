import React from 'react'
import { Link } from 'react-router-dom'

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
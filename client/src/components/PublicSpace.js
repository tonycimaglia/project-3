import React from 'react'
import PrivateSpaceCard from './styled_components/PrivateSpaceCard'

const PublicSpace = (props) => {
    return (
        <div>
            <PrivateSpaceCard>
                <div>neighborhood: {props.publicSpace.neighborhood}</div>
                <div>description: {props.publicSpace.description}</div>
                <div>location: {props.publicSpace.location}</div>
                <div>hours: {props.publicSpace.hours}</div>
            </PrivateSpaceCard>
        </div>
    )
}

export default PublicSpace
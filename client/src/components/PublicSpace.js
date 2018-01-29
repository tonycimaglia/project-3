import React from 'react'
import PrivateSpaceCard from './styled_components/PrivateSpaceCard'

const PublicSpace = (props) => {
    return (
        <div>
            <PrivateSpaceCard>
                neighborhood:
            {props.publicSpace.neighborhood}
                description:
            {props.publicSpace.description}
                location:
            {props.publicSpace.location}
                hours:
            {props.publicSpace.hours}
            </PrivateSpaceCard>
        </div>
    )
}

export default PublicSpace
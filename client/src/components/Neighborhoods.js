import React, { Component } from 'react'
import styled from 'styled-components'
// import { Redirect } from 'react-router-dom'

const NeighborhoodsPage = styled.div`
    background-color: #80D8F7;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100vh;
    border-bottom: 1px solid rgba(0,0,0,.0975);

    a{
        color: white;
        text-decoration: none;
}
    p{
        color:  #80D8F7;
    }
    a:hover{
        color: #80D8F7
    }
`

class Neighborhoods extends Component {
    render() {
        return (
            <NeighborhoodsPage>
                <h1>Atlanta Neighborhoods:</h1>
                <div>Candler Park</div>
                <div>Little Five Points</div>
                <div>Old Fourth Ward</div>
            </NeighborhoodsPage>
        )
    }
}

export default Neighborhoods
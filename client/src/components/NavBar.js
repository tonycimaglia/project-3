import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.div`
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 50px;
    border-bottom: 1px solid rgba(0,0,0,.0975);

    a{
        color: rgb(250, 220, 96);
        text-decoration: none;
}
    p{
        color:  rgb(250, 220, 96);
    }
    a:hover{
        color: #80D8F7
    }
`

class NavBar extends Component {
    render() {
        return (
            <Nav>
                <div>
                    <Link to='/'>Neighborhoods</Link>
                </div>
                <div>
                    <p>ParkShare</p>
                </div>
                <div>
                    <Link to='/users'>Users</Link>
                </div>
            </Nav>
        )
    }
}

export default NavBar
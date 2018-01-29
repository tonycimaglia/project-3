import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.div`
    background-color: white;
    font-family: 'Montserrat', sans-serif;
    color: rgb(34, 31, 32);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;

    a{
        color: black;
        text-decoration: none;
}
    p{
        color: black;
        font-size: 50px;
    }
    a:hover{
        color: rgb(76, 172, 169)
    }
    div.logo{
        background-color: rgb(244, 174, 139);
    }
`

class NavBar extends Component {
    render() {
        return (
            <Nav>
                <div className="logo">
                    <p>ParkShare</p>
                </div>
                <div>
                    <Link to='/'>Neighborhoods</Link>
                </div>
                <div>
                    <Link to='/users'>Users</Link>
                </div>
            </Nav>
        )
    }
}

export default NavBar
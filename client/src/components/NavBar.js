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
        color: rgb(34, 31, 32);
        text-decoration: none;
}
    p{
        color: rgb(34, 31, 32);
        font-size: 50px;
    }
    a:hover{
        color: rgb(76, 172, 169);
    }
`

class NavBar extends Component {
    render() {
        return (
            <Nav>
                <div>
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
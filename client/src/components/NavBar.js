import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.div`
    background-color: #21232A;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 50px;
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

class NavBar extends Component {
    render() {
        return (
            <Nav>
                <div>
                    <Link to='/'>Neighborhoods</Link>
                </div>
                <div>
                    <p>ParkShare - Atlanta</p>
                </div>
                <div>
                    <Link to='/users'>Users</Link>
                </div>
            </Nav>
        )
    }
}

export default NavBar
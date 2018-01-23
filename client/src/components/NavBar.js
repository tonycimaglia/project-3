import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.div`
    background-color: #FAFAFA;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 26px 5vw;
    width: 90vw;
    height: 25px;
    border-bottom: 1px solid rgba(0,0,0,.0975)
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
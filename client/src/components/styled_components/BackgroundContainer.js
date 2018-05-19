import styled from 'styled-components'

const BackgroundContainer = styled.div`
    background-color: white;
    font-family: 'Montserrat', sans-serif;
    color: rgb(34, 31, 32);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    border-bottom: 1px solid rgba(0,0,0,.0975);

    a{
        color: rgb(34, 31, 32);
        text-decoration: none;
}
    p{
        color:  #white;
    }
    a:hover{
        color: #80D8F7
    }
    h1{
        color: rgb(34, 31, 32);
        text-align: center;
    }
`

export default BackgroundContainer
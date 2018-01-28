import styled from 'styled-components'

const BackgroundContainer = styled.div`
    background-color: rgb(250, 220, 96);
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
        color:  #white;
    }
    a:hover{
        color: #80D8F7
    }
`

export default BackgroundContainer
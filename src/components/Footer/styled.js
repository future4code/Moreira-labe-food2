import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    position:fixed;
    bottom: 0;
    height: 50px;
    border: 0;
    border-top: 1px solid #b6b6b6;
    background-color: #FFFFFF;

ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 50px;
}
li {
    font-size: 27px;
    color: #000000;
    opacity: 25%;

    
}
li.active {
        color: #5cb646;
        opacity: 100%;
    }
`
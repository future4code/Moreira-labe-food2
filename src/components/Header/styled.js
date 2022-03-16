import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height:60px;
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: flex-start;

`

export const Button = styled.div `
    width: 23px;
    height: 24px;
    margin: 10px 321px 0 16px;
    object-fit: contain;
    position: relative;
    border: none;
    background-color: transparent;
    transition: 0.2s ease;
    align-self: center; 
    font-size: 24px;
    cursor: pointer;
    transition: transform 0.9s;
    :hover{
      background-color: transparent;
    }
`
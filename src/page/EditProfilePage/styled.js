import styled from 'styled-components'
import {TextField} from '@material-ui/core'

export const Input= styled(TextField)`
  width: 328px;
  height: 56px;
  margin: 8px 0 0;
  padding: 19px 48px 19px 16px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  color:#b8b8b8 ;
  input::placeholder{
    color: #000000ff;  // não aceita o preto???
  }
  
`


// export const Button = styled.button `

//   margin-top: 0.5em;
//   width: 328px;
//   height: 42px;
//   padding: 12px 16px;
//   border-radius: 2px;
//   border: none;
//   background-color: #5cb646;
//   font-size: 16px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: normal;
//   letter-spacing: -0.39px;
//   text-align: center;
//   color: black;



// `

export const Container = styled.div `

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
justify-content: space-around;
width: 100%;

`

export const Form = styled.form `

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
color: #b8b8b8;

.butons{
  width: 328px;
 height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  color: black;
  text-transform: capitalize;


  }

`

export const P = styled.p `

  width: 296px;
  height: 18px;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`

export const Title = styled.div `


  width: 360px;
  height: 42px;
  margin: 16px 0 0;
  padding: 12px 32px;

`

export const DivForm = styled.div`
  width: 360px;
  height: 72px;
  margin: 58px 0 0;
  padding: 0 16px 8px;

`

export const Header = styled.header`
  width: 100%;
  height:60px;
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: 20px;
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  align-items: center;
  color: black;
  justify-content: flex-start;

    .title {
      text-align: center;
      padding-left: 90px;
    }

`

export const Buttons = styled.div `
    color: black;
    margin-left: 20px;
    width: 50px;
    height: 24px;
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

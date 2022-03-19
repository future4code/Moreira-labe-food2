import styled from 'styled-components'
import {TextField} from '@material-ui/core'
//import {Button} from "@mui/material/Button";

export const Input = styled(TextField)`
  width: 328px;
  height: 56px;
  margin: 8px 0 0;
  padding: 19px 48px 19px 16px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  color:#b8b8b8 ;

`
export const DivForm = styled.div`
  width: 360px;
  height: 72px;
  margin: 58px 0 0;
  padding: 0 16px 8px;
  

`

export const Container = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 50px;
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
  font-weight: 700


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

export const Text = styled.p`
  text-align: center;
  margin-top: 20px;
  
    .link{
      text-decoration: none;
      color: black;
      cursor: pointer;
    }
  
`

// export const Buttons = styled(Button)`
//   width: 328px;
//   height: 42px;
//   padding: 12px 16px;
//   border-radius: 2px;
//   color: black;
//   /* background-color: #5cb646; */
  
// `
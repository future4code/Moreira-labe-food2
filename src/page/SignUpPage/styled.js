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

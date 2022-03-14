import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle `
body {
  margin: 0;
  background-color: white;
  font-family: Roboto, sans-serif;
  width: 360px;
  height: 640px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  border: 1px solid black;
  background-color: white;
  box-shadow: 0 0 5px #0000000F;


  
  
}
* {
  box-sizing: border-box;
}
`


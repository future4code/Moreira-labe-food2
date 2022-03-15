import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle `
body {      
  font-family: Roboto, sans-serif;   
  display: flex;   
  flex-direction: column;   
  margin: 50px auto;   
  width: 100%;   
  height: 50vh;   
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; 
}  
   @media screen and (max-width: 960px)
   {     
    margin: 0;    
    width: 100%;    
    height: 100vh;        
  } 
  * 
  {   
    margin: 0;   
    box-sizing: border-box; 
  }
`


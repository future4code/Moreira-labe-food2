import React from "react"
import logo from "../../assets/logo-future-eats@3x.png"
import { SplashContainer } from './styled';
import { useNavigate } from 'react-router-dom'



export default function SplashScreen() {
  const history = useNavigate()

  setTimeout(() => {
    history("/login")
  }, 2000)


  return (
    <div>
    <SplashContainer>
      <img src={logo} alt='Logotipo Eats4 (Definir o nome)' />
    </SplashContainer>
      
    </div>
  )
}


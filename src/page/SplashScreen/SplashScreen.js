import React from "react"
import logo from "../../images/logo-future-eats.png"
import { SplashContainer } from './styled';
import { useHistory } from 'react-router-dom'



const SplashScreen = () => {
  const history = useHistory()

  setTimeout(() => {
    history.push("/login")
  }, 2000)


  return (
    <div>
    <SplashContainer>
    <img src={logo} alt='Logotipo Eats4 (Definir o nome)' />
      </SplashContainer>
    </div>
  )
}

export default SplashScreen
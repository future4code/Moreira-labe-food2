import React from "react";
import {IoIosArrowBack} from 'react-icons/io';
import {useNavigate} from 'react-router-dom';
import {Button, Header} from './styled'

export default function Headers() {

  const navigate = useNavigate();
  
  return(
    <Header>
      <Button onClick={()=>{navigate(-1)}}><IoIosArrowBack/></Button>
        
      {/* <div><Button onClick={()=>{navigate(-1)}}><IoIosArrowBack className="icon"/>Pokedex</Button></div> */}
      
    </Header>
  )
}
import React from 'react'

// import { useState } from 'react';
// import axios from 'axios';

 import { Container } from './styled';
// import { Header } from './styled';

// import { goToAdress, goToLogin } from '../../routes/coordinator';
// import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {signup} from "../../api";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";


export default function SignUp({setRightButtonText}) {

  
  const [form, onChange, clear] = useForm({username: "", email: "", password: ""})
  const navigate = useNavigate()

  const onSubmitForm = (event) => {
      event.preventDefault()
      signup(form, clear, navigate, setRightButtonText)
     
  }

  return(
    <Container>
<div>endereço
      
      <Link to='/login'>Login</Link>
  
      </div>
      ...
    </Container>


  )


}
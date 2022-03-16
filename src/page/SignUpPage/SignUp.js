import React, {useContext} from 'react'

// import { useState } from 'react';
import axios from 'axios';

import {Input, Button, Container, Form, P, Title} from './styled';

// import { goToAdress, goToLogin } from '../../routes/coordinator';
// import { useHistory } from 'react-router-dom';
//import {Link} from 'react-router-dom';
import {signup} from '../../api';
import useForm from '../../hooks/useForm';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo/logo-future-eats-invert.png';




export default function SignUp() {

  
  const navigate = useNavigate()

  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
})

  const onSubmitForm = (event) => {
    event.preventDefault()
    if(form.password === form.confirmation){
     signup(form, clear, navigate)
    }
    else{
      alert("A senha não é igual a anterior")
    }
  }
   
  
  return(
   <Container>
     <img src={logo}/>
   <Title><P>Cadastro</P></Title>
      
      <Form onSubmit={onSubmitForm}>
                        <Input 
                            name="name"
                            placeholder="Nome"
                            value={form.name}
                            margin="dense"
                            type="text"
                            required
                            onChange={onChange}
                        />

                        <Input 
                            name="email"
                            value={form.email}
                            placeholder={'email@email.com'}
                            onChange={onChange}
                            margin="dense"
                            required
                            type="email"
                        />  

                        <Input 
                            name="cpf"
                            value={form.cpf}
                            onChange={onChange}
                            required
                            pattern="^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
                            margin="dense"
                            placeholder={'000.000.000-00'}
                        />      
                        
                        <Input 
                            name="password"
                            value={form.password}
                            onChange={onChange}
                            margin="dense"
                            required
                            placeholder={'Mínimo 6 caracteres'}
                            type="password"
                        />

                        <Input 
                            name={"confirmation"}
                            placeholder="Confirmarmação"
                            value={form.confirmation}
                            variant="outlined"
                            margin="normal"
                            type={"password"}
                            required
                            onChange={onChange}
                        />
                        
                        <Button 
                            type={"submit"}
                        >
                                Criar
                        </Button>
                    </Form>
      </Container>
  )


}
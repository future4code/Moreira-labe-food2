import React, { useContext } from 'react'

// import { useState } from 'react';
import axios from 'axios';

import { Input, Container, Form, P, Title, DivForm } from './styled';

// import { goToAdress, goToLogin } from '../../routes/coordinator';
// import { useHistory } from 'react-router-dom';
//import {Link} from 'react-router-dom';
import { signup } from '../../api';
import useForm from '../../hooks/useForm';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo/logo-future-eats-invert.png';
import Header from '../../components/Header/Header';
import Button from "@mui/material/Button";


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
    if (form.password === form.confirmation) {
      signup(form, clear, navigate)
    }
    else {
      alert("A senha não é igual a anterior")
    }
  }

  return(
   <Container>
     <Header/>
     <img src={logo}/>
   <Title><P>Cadastrar</P></Title>
      <DivForm>
      <Form onSubmit={onSubmitForm}>

                        <Input 
                            name="name"
                            label={"Nome"}
                            placeholder="Nome e sobrenome"
                            value={form.name}
                            type="text"
                            required
                            onChange={onChange}
                            variant={"outlined"}
                            id="outlined-required"
                            defaultValue="Nome"
                            fullWidth
                            margin={"dense"}
                            InputLabelProps={{
                              shrink: true,
                            }}
                        />

                        <Input 
                            name="email"
                            label={"E-mail"}
                            value={form.email}
                            placeholder={'email@email.com'}
                            onChange={onChange}
                            required
                            type="email"
                            variant={"outlined"}
                            id="outlined-required"
                            defaultValue="E-mail"
                            fullWidth
                            margin={"dense"}
                            InputLabelProps={{
                              shrink: true,
                            }}
                        />  

                        <Input 
                            name="cpf"
                            label={"CPF"}
                            value={form.cpf}
                            onChange={onChange}
                            required
                            pattern="^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
                            placeholder={'000.000.000-00'}
                            variant={"outlined"}
                            id="outlined-required"
                            defaultValue="CPF"
                            fullWidth
                            margin={"dense"}
                            InputLabelProps={{
                              shrink: true,
                            }}
                        />      
                        
                        <Input 
                            name="password"
                            label={"Senha"}
                            value={form.password}
                            onChange={onChange}
                            required
                            placeholder={'Mínimo 6 caracteres'}
                            type="password"
                            variant={"outlined"}
                            id="outlined-required"
                            defaultValue="Senha"
                            fullWidth
                            margin={"dense"}
                            InputLabelProps={{
                              shrink: true,
                            }}
                        />

                        <Input 
                            name={"confirmation"}
                            label={"Confirmar"}
                            placeholder="Confirme a senha anterior"
                            value={form.confirmation}
                            type={"password"}
                            required
                            onChange={onChange}
                            variant={"outlined"}
                            id="outlined-required"
                            defaultValue="Confirmar"
                            fullWidth
                            margin={"dense"}
                            InputLabelProps={{
                              shrink: true,
                            }}
                        />
                        
                        <Button className="butons"
                            type={"submit"}
                            variant="contained"
                            color="primary"
                            >
                                Criar
                        </Button>
                    </Form>
            </DivForm>
      </Container>
  )


}
import React, {useContext} from 'react'

// import { useState } from 'react';
// import axios from 'axios';

import {Input, Button, Container, Form, P, Title} from './styled';

// import { goToAdress, goToLogin } from '../../routes/coordinator';
// import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {signup} from '../../api';
import useForm from '../../hooks/useForm';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo/logo-future-eats-invert.png';




export default function SignUp() {

 
  const [form, onChange, clear] = useForm({name:"", email:"", cpf:"", password:""})
  const navigate = useNavigate()

  const onSubmitForm = (event) => {
      event.preventDefault()
      signup(form, clear, navigate)
      // if (onChangePassword !== form.password) {
      //   alert("A senha não é igual a anterior");
      // } else {
      //   signup();
      //   clear();
      // }
    };
    console.log(onSubmitForm)

  const onChangePassword = (event) => {
    event.preventDefault()
    signup(form, clear, navigate)
};

  return(
   <Container>
     <img src={logo}/>
   <Title><P>Cadastro</P></Title>
      
      <Form onSubmit={onSubmitForm}>
                        <Input 
                            name={"name"}
                            placeholder={'Nome e sobrenome'}
                            value={form.name}
                            onChange={onChange}
                            label={"Nome"}
                            required
                            pattern={"^.{3,}"}
                        />

                        <Input 
                            name={"email"}
                            value={form.email}
                            placeholder={'email@email.com'}
                            onChange={onChange}
                            label={"E-mail"}
                            required
                            type="email"
                        />  

                        <Input 
                            name={"cpf"}
                            value={form.cpf}
                            onChange={onChange}
                            label={"CPF"}
                            required
                            pattern="^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
                            
                            placeholder={'000.000.000-00'}
                        />      
                        
                        <Input 
                            name={"password"}
                            value={form.password}
                            onChange={onChange}
                            label={"Senha"}
                            required
                            placeholder={'Mínimo 6 caracteres'}
                            type="password"
                        />

                        <Input 
                            name={"password"}
                            value={form.password}
                            onChange={onChangePassword}
                            label={"Confirmar"}
                            placeholder={'Confirme a senha anterior'}
                            required
                            type="password"
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
import React, {useContext} from 'react'

// import { useState } from 'react';
import axios from 'axios';

import {Input, DivForm, Container, Form, P, Title} from './styled';


// import { useHistory } from 'react-router-dom';
//import {Link} from 'react-router-dom';
import {putAdress} from '../../api';
import useForm from '../../hooks/useForm';
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header/Header'
import Button from "@mui/material/Button";



export default function Adress() {

  
  const navigate = useNavigate()

  const [form, onChange, clear] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
})

  const onSubmitForm = (event) => {
    event.preventDefault()
    putAdress(form, clear, navigate)
  }
   
  
  return(
    <Container>
    <Header/>
    <Title><P>Meu Endereço</P></Title>
      <DivForm>
      <Form onSubmit={onSubmitForm}>
                        <Input 
                            name="street"
                            label="Logradouro"
                            value={form.street}
                            placeholder={'Rua/ Av.'}
                            onChange={onChange}
                            required
                            type="text"
                            variant={"outlined"}
                            id="outlined-required"
                            defaultValue="Rua / Av."
                            fullWidth
                            margin={"dense"}
                            InputLabelProps={{
                              shrink: true,
                            }}
                        />

                        <Input 
                            name="number"
                            label="Número"
                            value={form.number}
                            placeholder={'Número'}
                            onChange={onChange}
                            required
                            type="number"
                            variant={"outlined"}
                            id="outlined-required"
                            defaultValue="Número"
                            fullWidth
                            margin={"dense"}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            
                        />

                        <Input 
                            name="complement"
                            label="Complemento"
                            value={form.complement}
                            onChange={onChange}
                            placeholder={'Ap. /Bloco'}
                            variant={"outlined"}
                            id="outlined-required"
                            defaultValue="Ap. /Bloco."
                            fullWidth
                            margin={"dense"}
                            InputLabelProps={{
                              shrink: true,
                            }}
                        /> 

                        <Input 
                            name="neighbourhood"
                            label="Bairro"
                            value={form.neighbourhood}
                            placeholder={'Bairro'}
                            onChange={onChange}
                            required
                            variant={"outlined"}
                            id="outlined-required"
                            defaultValue="Bairro"
                            fullWidth
                            margin={"dense"}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            
                        />  

                        <Input 
                            name="city"
                            value={form.city}
                            label="Cidade"
                            onChange={onChange}
                            required
                            placeholder={'Cidade'}
                            type="text"
                            variant={"outlined"}
                            id="outlined-required"
                            defaultValue="Cidade"
                            fullWidth
                            margin={"dense"}
                            InputLabelProps={{
                              shrink: true,
                            }}
                        />

                        <Input 
                            name={"state"}
                            label="Estado"
                            placeholder={'Estado'}
                            value={form.state}
                            type={"text"}
                            required
                            onChange={onChange}
                            variant={"outlined"}
                            id="outlined-required"
                            defaultValue="Estado"
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
                                Salvar
                        </Button>
                    </Form>
                    </DivForm>
      </Container>
  )


}
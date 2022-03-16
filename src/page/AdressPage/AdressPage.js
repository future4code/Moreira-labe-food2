import React, {useContext} from 'react'

// import { useState } from 'react';
import axios from 'axios';

import {Input, Button, Container, Form, P, Title} from './styled';


// import { useHistory } from 'react-router-dom';
//import {Link} from 'react-router-dom';
import {putAdress} from '../../api';
import useForm from '../../hooks/useForm';
import { useNavigate } from "react-router-dom";





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
   <Title><P>Meu Endereço</P></Title>
      
      <Form onSubmit={onSubmitForm}>
                        <Input 
                            name="street"
                            value={form.street}
                            placeholder={'Rua/ Av.'}
                            onChange={onChange}
                            margin="dense"
                            required
                            type="text"
                        />

                        <Input 
                            name="number"
                            value={form.number}
                            placeholder={'Número'}
                            onChange={onChange}
                            margin="dense"
                            required
                            type="number"
                        />

                        <Input 
                            name="complement"
                            value={form.complement}
                            onChange={onChange}
                            margin="dense"
                            placeholder={'Ap. /Bloco'}
                        /> 

                        <Input 
                            name="neighbourhood"
                            value={form.neighbourhood}
                            placeholder={'Bairro'}
                            onChange={onChange}
                            margin="dense"
                            required
                        />  

                             
                        
                        <Input 
                            name="city"
                            value={form.city}
                            onChange={onChange}
                            margin="dense"
                            required
                            placeholder={'Cidade'}
                            type="text"
                        />

                        <Input 
                            name={"state"}
                            placeholder={'Estado'}
                            value={form.state}
                            variant="outlined"
                            margin="normal"
                            type={"text"}
                            required
                            onChange={onChange}
                        />
                        
                        <Button 
                            type={"submit"}
                        >
                               Salvar
                        </Button>
                    </Form>
      </Container>
  )


}
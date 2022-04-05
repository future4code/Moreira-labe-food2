import React from "react"
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import useForm from "../../hooks/useForm";
import {login} from "../../api";
import Button from "@mui/material/Button";
import {Input,  DivForm, Container, Form, Title, P, Text} from './styled'
import logo from '../../assets/logo/logo-future-eats-invert.png';


export default function Login(){

  const [form, onChange, clear] = useForm({email: "", password: ""})
  const navigate = useNavigate()

  const onSubmitForm = (event) => {
      event.preventDefault()
      login(form, clear, navigate)
      console.log(onSubmitForm)
  }

  return (
    <Container>
      <img src={logo}/>
      <Title><P>Entrar</P></Title>
      <DivForm>
        <Form onSubmit={onSubmitForm}>
                        <Input
                            name={"email"}
                            placeholder="email@email.com"
                            value={form.email}
                            onChange={onChange}
                            label={"E-mail"}
                            type="email"
                            variant={"outlined"}
                            required
                            id="outlined-required"
                            defaultValue="E-mail"
                            fullWidth
                            margin={"dense"}
                            InputLabelProps={{
                              shrink: true,
                            }}
                        />
                        
                        <Input 
                            name={"password"}
                            value={form.password}
                            placeholder="Mínimo 6 caracteres"
                            onChange={onChange}
                            label={"Senha"}
                            variant={"outlined"}
                            fullWidth
                            margin={"dense"}
                            required
                            type="password"
                            InputLabelProps={{
                              shrink: true,
                            }}
                        />
                        
                        <Button className="butons"
                            type={"submit"}
                            variant="contained"
                            color="primary"
                            >
                                Entrar
                        </Button>
                        
          </Form>
          <Text>Não possui cadastro? <Link to='/cadastro' className="link">Clique aqui</Link></Text>
        </DivForm>
    </Container>


  )

}
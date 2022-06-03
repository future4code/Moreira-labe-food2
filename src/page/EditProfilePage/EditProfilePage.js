import React, {useContext, useEffect} from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
// import {Link} from 'react-router-dom';
import GlobalStateContext from "../../global/GlobalStateContext"
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import {BASE_URL} from "../../constants/Urls";
import {Input, Form, DivForm, Header, Buttons, Container} from './styled';
import useForm from '../../hooks/useForm';
import Button from "@mui/material/Button";
import {IoIosArrowBack} from 'react-icons/io';
import { goToProfile } from "../../routes/coordinator";
import { putUpdateProfile, getProfile } from '../../api';

export default function EditProfilePage() {
  useProtectedPage()

  const navigate = useNavigate()
  const { states, setters } = useContext(GlobalStateContext);
  //const token = { headers: { auth: localStorage.getItem('token') } }

  // useEffect((setForm) => {  
  //   axios.get(`${BASE_URL}/profile`, token)
  //       .then(response => {
  //         setForm({
  //           name: response.data.user?response.data.user.name:"",
  //           email: response.data.user?response.data.user.email:"",
  //           cpf: response.data.user?response.data.user.cpf:"",
  //       })
  //   })
  //       .catch((error) => {
  //           console.log(error.response)
  //       })
  // }, []);

  const [form, onChange,clear, setForm] = useForm({  //inclusão do parâmetro clear na ordem
    name: "",
    email: "",
    cpf: "",
  })
  

  const onSubmitForm = (event) => {
    event.preventDefault()
    putUpdateProfile(form, onChange, clear, setForm) //alteração
    
  }

  useEffect(() => {
    getProfile(setForm);
  }, []);

  

  

  return (

    <Container>

      <Header>
      <Buttons onClick={()=>{navigate(-1)}}><IoIosArrowBack color="black" fontSize="20"/></Buttons>
        <p className="title">Editar</p>
      </Header>
      
      <DivForm>
      <Form onSubmit={onSubmitForm}>

                        <Input 
                            name={"name"}
                            label={"Nome"}
                            placeholder="Nome e Sobrenome" /* alteração */
                            value={form.name} /* alteração */
                            type="text"
                            required
                            onChange={onChange} /* alteração */
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
                            name={"email"}
                            label={"E-mail"}
                            value={form.email}
                            placeholder="email@email.com"
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
                            name={"cpf"}
                            label={"CPF"}
                            value={form.cpf}
                            onChange={onChange}
                            required
                            pattern="^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
                            placeholder="000.000.000-00"
                            variant={"outlined"}
                            id="outlined-required"
                            defaultValue="CPF"
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


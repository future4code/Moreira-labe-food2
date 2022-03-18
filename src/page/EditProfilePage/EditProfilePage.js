import React, {useContext, useEffect} from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
// import {Link} from 'react-router-dom';
import GlobalStateContext from "../../global/GlobalStateContext"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {BASE_URL} from "../../constants/Urls";
import {Input, Form, DivForm} from './styled';
import useForm from '../../hooks/useForm';
import Button from "@mui/material/Button";


export default function EditProfilePage() {
  useProtectedPage()

  const navigate = useNavigate()
  const { states, setters } = useContext(GlobalStateContext);
  const token = { headers: { auth: localStorage.getItem('token') } }

  useEffect(() => {  
    axios.get(`${BASE_URL}/profile`, token)
        .then(response => {
          setters.setPerfil(response.data.user)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
  }, []);

  const [form, onChange,clear, setForm] = useForm({  //inclusão do parâmetro clear na ordem
    name: "",
    email: "",
    cpf: "",
  })
  

  const onSubmitForm = (event) => {
    event.preventDefault()
    putUpdateProfile() //alteração
  }


  const putUpdateProfile = ()=>{ 

    const body = form

    axios.put(`${BASE_URL}/profile`, body,  token)
        .then(response => {
          setters.setPerfil(response.data.user)
          console.log("Dados alterados com sucesso!")
          console.log(response.data.user)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
  }

  

  return (

    <div>
      <div> 
        <p>{states.perfil.name}</p>
        <p>{states.perfil.email}</p>
        <p>{states.perfil.cpf}</p>

      </div>
      <DivForm>
      <Form onSubmit={onSubmitForm}>

                        <Input 
                            name={"name"}
                            label={"Nome"}
                            placeholder={states.perfil.name} /* alteração */
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
                            placeholder={states.perfil.email}
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
                            placeholder={states.perfil.cpf}
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
                                Criar
                        </Button>
                    </Form>
            </DivForm>
 
{/* 
    <Link to='/login'>Login</Link> */}

    </div>
  )
}


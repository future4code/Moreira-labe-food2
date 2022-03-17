import React, {useContext, useEffect} from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
// import {Link} from 'react-router-dom';
import GlobalStateContext from "../../global/GlobalStateContext"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {BASE_URL} from "../../constants/Urls";
import {Input, Form, DivForm} from './styled';
import useForm from '../../hooks/useForm';
import {putUpdateProfile} from '../../api';
import Button from "@mui/material/Button";


export default function EditProfilePage() {
  useProtectedPage()

  const navigate = useNavigate()

  const [form, onChange, setForm] = useForm({
    name: "",
    email: "",
    cpf: "",
})

  const onSubmitForm = (event) => {
    event.preventDefault()
    putUpdateProfile(form, navigate)
  }
   

  const { states, setters } = useContext(GlobalStateContext);
  const token = { headers: { auth: localStorage.getItem('token') } }

  useEffect(() => {  
    axios.get(`${BASE_URL}/profile`, token)
        .then(response => {
          setters.setPerfil(response.data.user)
          // putUpdateProfile()
        })
        .catch((error) => {
            console.log(error.response.data)
        })
  }, []);

  const handleInputChange = (event) => {       
     const { value, name } = event.target;         
     onChange(value, name);     
    };

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
                            placeholder="Nome"
                            value={states.perfil.name}
                            type="text"
                            required
                            onChange={handleInputChange}
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
                            value={states.perfil.email}
                            placeholder={'email@email.com'}
                            onChange={handleInputChange}
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
                            value={states.perfil.cpf}
                            onChange={handleInputChange}
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


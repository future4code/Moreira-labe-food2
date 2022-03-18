import React, {useContext, useEffect} from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
// import {Link} from 'react-router-dom';
import GlobalStateContext from "../../global/GlobalStateContext"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {BASE_URL} from "../../constants/Urls";
import useForm from '../../hooks/useForm';
import Button from "@mui/material/Button";
import {Input, DivForm, Container, Form, P, Title, Header, Butons} from './styled';
import {IoIosArrowBack} from 'react-icons/io';
import { goToProfile } from "../../routes/coordinator";


export default function EditAddressPage() {
  useProtectedPage()

  const navigate = useNavigate()
  const { states, setters } = useContext(GlobalStateContext);
  const token = { headers: { auth: localStorage.getItem('token') } }

  useEffect(() => {  
    axios.get(`${BASE_URL}/profile/address`, token)
        .then(response => {
          setters.setAddress(response.data.address)
          console.log(response.data.address)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
  }, []);

  const [form, onChange,clear, setForm] = useForm({  //inclusão do parâmetro clear na ordem
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "", 
  })
  

  const onSubmitForm = (event) => {
    event.preventDefault()
    putEditAdress()//alteração
    goToProfile(navigate)
  }

 const putEditAdress = () => {
  const body = form
    axios.put(`${BASE_URL}/address`, body, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
    .then((res)=>{
      setters.setAddress(res.data)
      console.log(res.data)
      alert("Endereço atualizado com sucesso!")
      clear()
    })
    .catch((err)=>{
      alert("Erro tente novamente!")
      console.log(err.response)
    })
        
  }



  return (


    <Container>
    
    <Header>
      <Button onClick={()=>{navigate(-1)}}><IoIosArrowBack color="black" fontSize="20"/></Button>
      <p className="title">Endereço</p>
    </Header>
    
    <DivForm>
      <Form onSubmit={onSubmitForm}>
                        <Input 
                            name="street"
                            label="Logradouro"
                            value={form.street}
                            placeholder={states.address.street}
                            onChange={onChange}
                            required
                            type="text"
                            variant={"outlined"}
                            id="outlined-required"
                            defaultValue="Rua/ Av."
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
                            placeholder={states.address.number}
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
                            placeholder={states.address.complement}
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
                            placeholder={states.address.neighbourhood}
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
                            placeholder={states.address.city}
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
                            placeholder={states.address.state}
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


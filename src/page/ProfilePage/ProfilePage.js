import React, {useContext, useEffect} from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import {Link} from 'react-router-dom';
import GlobalStateContext from "../../global/GlobalStateContext"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {BASE_URL} from "../../constants/Urls";


export default function ProfilePage() {
  useProtectedPage()

  const navigate = useNavigate()

  const { states, setters } = useContext(GlobalStateContext);
  const token = { headers: { auth: localStorage.getItem('token') } }

  useEffect(() => {  
    axios.get(`${BASE_URL}/profile`, token)
        .then(response => {
          setters.setPerfil(response.data.user)
          ConsultaEndereco()
          ConsultaHistoricoPedidos()
        })
        .catch((error) => {
            console.log(error.response.data)
        })
  }, []);

  const ConsultaEndereco = () =>{
    axios.get(`${BASE_URL}/profile/address`, token)
        .then(response => {
          setters.setEndereco(response.data.address)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
  }

  
  const ConsultaHistoricoPedidos = () =>{
    axios.get(`${BASE_URL}/orders/history`, token)
        .then(response => {
          setters.setHistoricoPedidos(response.data.orders)
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

      <div>
      <p>Endereço Cadastrato</p>
          <p>{states.endereco.neighbourhood}</p>
        </div>

        <div>
      <p>Histórico de Pedidos</p>
          <p>{states.historicoPedidos}</p>
          
        </div>
    </div>

    <Link to='/login'>Login</Link>

    </div>
  )
}


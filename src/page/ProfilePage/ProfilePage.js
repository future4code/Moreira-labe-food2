import React, {useContext, useEffect} from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import {Link} from 'react-router-dom';
import GlobalStateContext from "../../global/GlobalStateContext"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {BASE_URL} from "../../constants/Urls";
import {MdOutlineEdit} from 'react-icons/md'
import {ContainerProfile, ContainerAddress, Header, Container, P, Box, ContainerHistory, DivBox } from './styled';
import Footer from '../../components/Footer';
import HistoryCard from "../../components/teste/CardRestaurant";

export default function ProfilePage() {
  useProtectedPage()

  const navigate = useNavigate()

  const { states, setters } = useContext(GlobalStateContext);
  const token = { headers: { auth: localStorage.getItem('token') } }

  useEffect(() => {  
    axios.get(`${BASE_URL}/profile`, token)
        .then(response => {
          setters.setProfile(response.data.user)
          ConsultaEndereco()
          OrdersHistory()
        })
        .catch((error) => {
            console.log(error.response.data)
        })
  }, []);

  const ConsultaEndereco = () =>{
    axios.get(`${BASE_URL}/profile/address`, token)
        .then(response => {
          setters.setAddress(response.data.address)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
  }

  
  const OrdersHistory = () =>{
    axios.get(`${BASE_URL}/orders/history`, token)
        .then(response => {
          setters.setHistoricoPedidos(response.data.orders)
        })
        .catch((error) => {
            console.log(error.response)
        })
  }

  return (
    <Container>

    <Header>
      <p className="title">Meu Perfil</p>
    </Header>
      
      <ContainerProfile> 
        <div className="profilediv">
          <p>{states.profile.name}</p>
          <p>{states.profile.email}</p>
          <p>{states.profile.cpf}</p>
        </div>
        <div>
          <Link to="/editar-cadastro"><MdOutlineEdit className="icon"/></Link>
        </div>
        </ContainerProfile>

      <ContainerAddress>
        <div className="profilediv">
            <p className="addressProfile">Endereço Cadastrato</p>
            <p>{states.address.street}, {states.address.number} - {states.address.neighbourhood} </p>
            <p></p>
            <p></p>
        </div>
        <div>
          <Link to="/editar-endereco"><MdOutlineEdit className="icon"/></Link>
        </div>
      </ContainerAddress>

      <P>Histórico de Pedidos</P>
      <DivBox>
      <ContainerHistory>
        <HistoryCard/>
      </ContainerHistory>
      </DivBox>
      <Footer/>
    </Container>

  )
}


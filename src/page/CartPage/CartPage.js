import React, {useContext, useEffect} from "react"
import Footer from "../../components/Footer";
import {
  Container,
  Img,
  Card,
  Ul,
  Li,
  Title,
  SubTitle,
  ButtonAdd,
  ButtonDel,
  Counter,
  MainCard,
  StyleAdress,
  PriceStyle,
  Freight,
  ButtonCart,
  ContainerCheck,
  Cash,
  CredidCard,
} from "./styled";
import GlobalStateContext from "../../global/GlobalStateContext"
import { useNavigate, useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage"
import axios from 'axios';
import {BASE_URL} from "../../constants/Urls";
import {goToFeed}from "../../routes/coordinator";

import { api } from "../../api";
import Button from "@mui/material/Button";
import { GoSearch } from "react-icons/go";
import img from "../../images/Whopper_Hero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function Feed() {
  useProtectedPage()

  // const [restaurantDetails, setRestaurantDetails] = useState([]);
  const { states, setters } = useContext(GlobalStateContext);
  const token = { headers: { auth: localStorage.getItem('token') } }
  const params = useParams();
  const navigate = useNavigate()

  useEffect(() => {

    axios.get(`${BASE_URL}/restaurants/${params.id}`, token)
      .then((response) => {
        setters.setRestaurantDetails([response.data.restaurant]);
        console.log(response.data.restaurant)
        ConsultaEndereco()
        
      })
      .catch((error) => {
        console.log(error.response)
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

 const placeOrder = () => {
    const headers = {"Content-Type":"application/json"}
    const body = {products:[{
      id:"",
      quantity:"",
    }, {
      quantity: "",
      id: "",
    }],
    paymentMethod:""}
  
    axios.post(`${BASE_URL}/restaurants/${params.id}/order`, body, headers)
    
    .then((response)=>{
      setters.setprodutos([response.data.products])
      
      
    })
    .catch((err)=>{
      alert("E-mail ou CPF já cadastrados!")
      console.log(err.response)
    })
        
  }

  const onClickorder = (event) => {
    event.preventDefault()
    placeOrder() //alteração
    goToFeed(navigate)
  }



  return (
    <>
      <Container>
        <div style={{ width: "100%" }}>
          <Title>Meu Carrinho</Title>
        </div>

        <StyleAdress style={{ width: "100%" }}>
          <p className="Delivery">Enderço de entrega</p>
          <strong>
          <p>{states.address.street},  {states.address.number} - {states.address.neighbourhood} </p>
          </strong>
        </StyleAdress>
        <Ul>
          <Card>
            <div
              style={{
                width: "100%",
              }}
            >
              <div key={states.restaurantDetails.id}>
                <Li style={{ color: "#57B16A", marginLeft: "-6%" }}>
                {states.restaurantDetails.name}
                </Li>
              </div>

              <Li
                style={{ color: "#000000", opacity: "25%", marginLeft: "-6%" }}
              >
                {states.restaurantDetails.address}
              </Li>

              <div
                style={{
                  color: "#000000",
                  opacity: "25%",
                  marginLeft: "-10%",
                }}
              >
                <Li>{states.restaurantDetails.deliveryTime}</Li>
              </div>
            </div>
          </Card>
          <MainCard
            style={{
              display: "flex",
              gridTemplateColumns: "1fr 1fr 1fr",
              alignItems: "center",
              width: "90%",
            }}
          >
            <Li>
              <Img src={states.restaurantDetails.photoUrl} style={{ width: "96px", height: "112px" }} />
            </Li>
            <div>
              <div>
                <Li style={{ color: "#57B16A" }}>{states.restaurantDetails.name}</Li>
                <Li
                  style={{
                    color: "#000000",
                    opacity: "25%",
                    display: "flex",
                    fontSize: "12px",
                  }}
                >
                  {states.restaurantDetails.description}
                </Li>
              </div>
              <Li>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <strong>{states.restaurantDetails.price}</strong>
                  <Counter>3</Counter>
                  <ButtonDel>Remover</ButtonDel>
                </div>
              </Li>
            </div>
          </MainCard>
        </Ul>
        <Freight>Frete {states.restaurants.shipping}</Freight>

        <PriceStyle>
          <p>SUBTOTAL</p>
          <p className="Total">R$67,00</p>
        </PriceStyle>

        <SubTitle>Formas de Pagamento</SubTitle>
        <div
          style={{
            marginBottom: "10px",
            border: 0,
            borderBottom: "1px solid black",
            width: "90%",
            padding: 4,
          }}
        />

        <ContainerCheck>
          <Cash>
            <input type="radio" name="radio" />
            <span>Dinheiro </span>
          </Cash>
          <CredidCard>
            <input type="radio" name="radio" />
            <span> Cartão de crédito </span>
          </CredidCard>
        </ContainerCheck>

        <ButtonCart onClick={() => {onClickorder()}}>Confirmar</ButtonCart>
        <Footer />
      </Container>
    </>
  );
}

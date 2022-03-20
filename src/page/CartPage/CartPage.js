import React, {useContext, useEffect, useState} from "react"
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

  const { states, setters } = useContext(GlobalStateContext);
  const token = { headers: { auth: localStorage.getItem('token') } }
  const navigate = useNavigate();
  const itensCart =  JSON.parse(localStorage.getItem("cart"));
  const restaurantDetails =  JSON.parse(localStorage.getItem("restaurant"));
  

  const totalPrice =itensCart.reduce(getTotal,0)
  function getTotal(total, item) {
    return total + (item.price * item.quantity);
   }

  useEffect(() => {
    axios.get(`${BASE_URL}/profile/address`, token)
    .then(response => {
      setters.setAddress(response.data.address)
    })
    .catch((error) => {
        console.log(error.response.data)
    })
  }, []);


  const onClickorder = (event) => {
    event.preventDefault()
    //placeOrder() //alteração
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
          {restaurantDetails.map((restaurant => (
          <Card>
              <div
                style={{
                  width: "100%",
                }}
              >
                <div >
                  <Li style={{ color: "#57B16A", marginLeft: "-6%" }}>
                  {restaurant.name}
                  </Li>
                </div>

                <Li
                  style={{ color: "#000000", opacity: "25%", marginLeft: "-6%" }}
                >
                  {restaurant.address}
                </Li>

                <div
                  style={{
                    color: "#000000",
                    opacity: "25%",
                    marginLeft: "-10%",
                  }}
                >
                  <Li>{restaurant.deliveryTime}</Li>
                </div>
              </div>
            </Card>
          )))}

          {itensCart.map((produto => (
          <MainCard
            style={{
              display: "flex",
              gridTemplateColumns: "1fr 1fr 1fr",
              alignItems: "center",
              width: "90%",
            }}
          >
            
              <Li>
                <Img src={produto.photoUrl} style={{ width: "96px", height: "112px" }} />
              </Li>
              <div>
                <div>
                  <Li style={{ color: "#57B16A" }}>{produto.name}</Li>
                  <Li
                    style={{
                      color: "#000000",
                      opacity: "25%",
                      display: "flex",
                      fontSize: "12px",
                    }}
                  >
                    {produto.description}
                  </Li>
                </div>
                <Li>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <strong>R$ {produto.quantity * produto.price}</strong>
                    <Counter>{produto.quantity }</Counter>                   
                    <ButtonDel>Remover</ButtonDel>
                  </div>
                </Li>
              </div>
           
          </MainCard>
           )))}
        </Ul>
        <Freight>Frete {states.restaurants.shipping}</Freight>

        <PriceStyle>
          <p>SUBTOTAL</p>
          <p className="Total">R${totalPrice}</p>
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

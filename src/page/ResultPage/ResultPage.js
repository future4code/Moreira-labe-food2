//import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import {
  FormControl,
  MenuItem,
  Select,
} from "@mui/material"
import { api } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import CardProduct from '../../components/CardProduct'
import {
  Container, Img, Card, Ul, Li, Title, SubTitle, MainCard,
  ContainerModal,
  ModalSelect,
  StyledButton,
} from "./styled";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import GlobalStateContext from '../../global/GlobalStateContext';


export default function Feed() {
  const { states, setters } = useContext(GlobalStateContext);


  const [quantity, setQuantity] = useState(0)
  const [open, setOpen] = useState(false)
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const [prod, setProd] = useState({})

  const params = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    api.get(`/restaurants/${params.id}`)
      .then((response) => {
        setRestaurantDetails([response.data.restaurant]);
      })
      .catch((error) => {
        console.log(error.response)
      })
    localStorage.setItem("cart", JSON.stringify(states.cart))
  }, [states.cart]);

  const openModal = (product) => {
  
    if (states.cart.length > 0) {
      if (params.id === states.cart[0].idRestaurant) {
        setOpen(true)
        setProd({ ...product, idRestaurant: params.id })

      } else {
        alert("Infelizmente você não pode realizar pedidos em diferentes restaurantes! Verifique seu carrinho")

      }
    } else {
      setOpen(true)
      setProd({ ...product, idRestaurant: params.id })

    }

  }

  const addToCart = () => {

    if (quantity > 0) {
      setters.setCart([...states.cart, { ...prod, quantity: quantity }])
      setQuantity(0)
      setters.setRestaurants(states.restaurants)
      localStorage.setItem("restaurant", JSON.stringify(restaurantDetails))
      localStorage.setItem("cart", JSON.stringify(states.cart))
      closeModal()
    }
  }

  const closeModal = () => {
    setOpen(!open);
  }

  const handleChange = (event) => {
    setQuantity(event.target.value)
  }
  return (
    <>
      <Container>
        <div style={{ width: "100%" }}>
          <MdOutlineArrowBackIosNew style={{ float: 'left', marginLeft: "15px" }}
            onClick={() => { navigate(-1) }}
          />
          <Title>Restaurante</Title>
        </div>
        <div style={{ border: 0, borderBottom: '1px solid #6c6c6c', opacity: '25%', width: '100%', padding: 4 }} />

        <Ul>
          {restaurantDetails.map((res => (
            <>
              <Card>
                <Li>
                  <Img src={res.logoUrl} />
                </Li>
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <div style={{lineHeight: '1.8'}}>
                    <Li style={{ color: "#57B16A", marginTop: 5 }}>{res.name}</Li>
                    <Li style={{ color: "#000000", opacity: "25%", marginTop: 5 }}>{res.category}</Li>
                  </div>
                  <div style={{
                    display: "flex", color: "#000000", opacity: "25%", marginBottom: 5
                  }}>
                    <Li style={{ marginRight: 20}}>{res.deliveryTime}min</Li>
                    <Li>Frete: R${res.shipping.toFixed(2)}</Li>
                  </div>
                </div>

                <Li style={{ color: "#000000", opacity: "25%" }}>{res.address}</Li>
              </Card>

              <SubTitle>Principais</SubTitle>
              <div style={{ marginBottom: "15px", border: 0, borderBottom: "1px solid black", width: "100%" }} />
              {res.products.map((product) => (
                <>
                  <MainCard>
                    <CardProduct
                      key={product.id}
                      product={product}
                      quantity={product.quantity}
                      openModal={openModal}

                    />

                    <ContainerModal open={open} onClick={(e) => (e.target === e.currentTarget ? closeModal() : null)}>
                      <ModalSelect >
                        <p>Selecione a quantidade desejada</p>
                        <FormControl fullWidth>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={quantity}
                            onChange={handleChange}
                          >
                            <MenuItem value={0} disabled>
                              0
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                          </Select>
                        </FormControl>

                        <StyledButton
                          variant="text"
                          color="primary"
                          onClick={() => addToCart(product)}
                        >
                          ADICIONAR AO CARRINHO
                        </StyledButton>
                      </ModalSelect>
                    </ContainerModal>




                  </MainCard>
                </>
              ))}
            </>
          )))}
        </Ul>


        <Footer />
      </Container>
    </>
  );
}
{/**

          <SubTitle>Acompanhamentos</SubTitle>
        <div
          style={{
            marginBottom: "15px",
            border: 0,
            borderBottom: "1px solid black",
            width: "90%",
            marginLeft: "5%",
            padding: 4,
          }}
        />
          <MainCard
               style={{
                display: "flex",
                gridTemplateColumns: "1fr 1fr 1fr",
                alignItems: "center",
                width: "90%",
              }}        
          >
            <Li>
              <Img src={fries} style={{ width: "96px", height: "112px"}} />
            </Li>
            <div>
              <div>
                <Li style={{ color: "#57B16A" }}>Cheese Fries</Li>
                <Li style={{ color: "#000000", opacity: "25%", display: "flex", fontSize: "12px"}}>
                  Porção de fritas temperadas com páprica e queijo derretido.
                </Li>
              </div>
              <Li>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                <strong>R$15,00</strong>
                <ButtonDel>Remover</ButtonDel>
                </div>
              </Li>              
            </div>
          </MainCard>
*/}
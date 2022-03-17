//import axios from "axios";
import React, { useState, useEffect } from "react";
import { api } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import { Container, Img, Card, Ul, Li, ContainerList, Title, SubTitle, ButtonAdd, ButtonDel, MainCard, ImgProduct } from "./styled";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';


export default function Feed() {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
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
  }, []);
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
                  <div>
                    <Li style={{ color: "#57B16A", marginTop: 5 }}>{res.name}</Li>
                    <Li style={{ color: "#000000", opacity: "25%",marginTop: 5}}>{res.category}</Li>
                  </div>
                  <div style={{display: "flex", color: "#000000", opacity: "25%",
                    }}>
                    <Li style={{marginRight: 20,marginBottom: 5}}>{res.deliveryTime}min</Li>
                    <Li>Frete: R${res.shipping.toFixed(2)}</Li>
                  </div>
                </div>

                <Li style={{ color: "#000000", opacity: "25%" }}>{res.address}</Li>
              </Card>

              <SubTitle>Principais</SubTitle>
              <div style={{ marginBottom: "15px", border: 0, borderBottom: "1px solid black", width: "100%"}} />
              {res.products.map((product) => (
                <>
              <MainCard>
                <Li>
                  <ImgProduct src={product.photoUrl}/>
                </Li>
                <div>
                  <div>
                    <Li style={{ color: "#57B16A", margin: 10 }}>{product.name}</Li>
                    <Li style={{ color: "#000000", opacity: "25%", display: "flex", margin: 10, fontSize: "12px" }}>{product.description}</Li>
                  </div>
                  <Li>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <strong style={{ margin: 10 }}>R${product.price.toFixed(2)}</strong>
                      <ButtonAdd>Adicionar</ButtonAdd>
                    </div>
                  </Li>
                </div>
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
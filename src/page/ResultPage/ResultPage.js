//import axios from "axios";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import { CardRestaurant } from '../../components/CardRestaurant';
// import GlobalContext from '../../global/GlobalContext';
// import { useHistory } from "react-router-dom";
// import Navigation from "../../components/Navigation";
// import { Header } from "../../components/Header";
// import useProtectedPage from "../../hooks/useProtectedPage";
// import { api } from "../../api";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import img from "../../images/Whopper_Hero.png";
import fries from "../../images/Batata-frita-Png-2-1024x1024.png";
import {Container, Img, Card, Ul, Li, ContainerList, Title, SubTitle, ButtonAdd, ButtonDel, MainCard} from "./styled";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import { GoSearch } from "react-icons/go";

export default function Feed() {
  return (
    <>
      <Container>
        <div style={{width: "100%"}}> 
          <MdOutlineArrowBackIosNew
               style={{
                float: 'left',
                
                marginLeft: "15px",
          }}
          />
          <Title>
          Restaurante
          </Title>
          </div>         
          <div style={{border: 0, borderBottom: '1px solid #6c6c6c', opacity: '25%', width: '100%', padding: 4}}/>
        
        <ContainerList></ContainerList>

        <Ul>
          <Card>
            <Li>
              <Img src={img} />
            </Li>
            <div
              style={{
                // display: 'grid',
                // gridTemplateColumns: '1fr 1fr',
                width: "100%",
              }}
            >
              <div>
                <Li style={{ color: "#57B16A", marginLeft: "-6%" }}>Bullguer Vila Madalena</Li>
                <Li style={{ color: "#000000", opacity: "25%", marginLeft: "-6%" }}>Burguer</Li>
              </div>
              <div 
                    style={{
                    display: "flex",
                    color: "#000000",
                    opacity: "25%",
                    marginLeft: "-10%",
                  }}>
                    <Li>30 - 45 min</Li>
                    <Li>Frete: R$6,00</Li>
              </div>
            </div>

            <Li style={{ color: "#000000", opacity: "25%", marginLeft: "-6%" }}>
              R. fradique Coutinho, 1136 - Vila Madalena
            </Li>
          </Card>

          <SubTitle>Principais</SubTitle>
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
              <Img src={img} style={{ width: "96px", height: "112px"}} />
            </Li>
            <div>
              <div>
                <Li style={{ color: "#57B16A" }}>Bullguer</Li>
                <Li style={{ color: "#000000", opacity: "25%", display: "flex", fontSize: "12px"}}>
                  Pão, Carne, Queijo, Picles e Molho.
                </Li>
              </div>
              <Li>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                <strong>R$20,00</strong>
                <ButtonAdd>Adicionar</ButtonAdd>
                </div>
              </Li>              
            </div>
          </MainCard>

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
        </Ul>
        <Footer />
      </Container>
    </>
  );
}

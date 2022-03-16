//import axios from "axios";
import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';

// import { CardRestaurant } from '../../components/CardRestaurant';
// import GlobalContext from '../../global/GlobalContext';
// import { useHistory } from "react-router-dom";
// import Navigation from "../../components/Navigation";
// import { Header } from "../../components/Header";
// import useProtectedPage from "../../hooks/useProtectedPage";
// import { api } from "../../api";
import {Link} from 'react-router-dom';
import Footer from '../../components/Footer'
import img from  '../../images/Whopper_Hero.png'
import { Container, Img, Card, Input, Ul, Li, ContainerList, IconSearch, Title } from './styled'

import { GoSearch } from 'react-icons/go'


export default function Feed(){
  return (
    <>
    <Container> 
      <Title>FutureEats</Title>
      <div style={{border: 0, borderBottom: '1px solid #6c6c6c', opacity: '25%', width: '100%', padding: 4}}/>
      <div style={{position: 'relative', width: '82%', margin:'20px auto'}}>
      <Input style={{position: 'relative'}} placeholder="Restaurante"/>
      <IconSearch >
        < GoSearch/>
      </IconSearch>
      </div>
      
      <ContainerList>
      <Swiper
      slidesPerView={3}
      spaceBetween={3}
      >
      <SwiperSlide>Burger</SwiperSlide>
      <SwiperSlide>Asiáticas</SwiperSlide>
      <SwiperSlide>Massas</SwiperSlide>
      <SwiperSlide>Saudáveis</SwiperSlide>
    </Swiper>
      </ContainerList>
      
      <Ul>
        <Card>
          <Li><Img src={img}/></Li>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            width: '100%'
          }}>
          <div>
            <Li style={{color: '#57B16A'}}>Vinil Butantã</Li>
            <Li style={{color: '#000000',opacity: '25%'}}>30 - 45 min</Li>
          </div>
          <Li style={{display: 'flex',flexDirection: 'column',justifyContent: 'flex-end',alignItems: 'flex-end',color: '#000000',opacity: '25%'}}>Frete: R$6,00</Li>
          </div>
        </Card>
        
        <Card>
          <Li><Img src={img}/></Li>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            width: '100%'
          }}>
          <div>
            <Li style={{color: '#57B16A'}}>Vinil Butantã</Li>
            <Li style={{color: '#000000',opacity: '25%'}}>30 - 45 min</Li>
          </div>
          <Li style={{display: 'flex',flexDirection: 'column',justifyContent: 'flex-end',alignItems: 'flex-end',color: '#000000',opacity: '25%'}}>Frete: R$6,00</Li>
          </div>
        </Card>
        
        <Card>
          <Li><Img src={img}/></Li>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            width: '100%'
          }}>
          <div>
            <Li style={{color: '#57B16A'}}>Vinil Butantã</Li>
            <Li style={{color: '#000000',opacity: '25%'}}>30 - 45 min</Li>
          </div>
          <Li style={{display: 'flex',flexDirection: 'column',justifyContent: 'flex-end',alignItems: 'flex-end',color: '#000000',opacity: '25%'}}>Frete: R$6,00</Li>
          </div>
        </Card>
      </Ul>
      < Footer/>  
    </Container>
    </>


  )

}
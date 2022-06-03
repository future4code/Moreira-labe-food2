//import axios from "axios";
import React, { useContext, useState } from "react"
import GlobalStateContext from '../../global/GlobalStateContext';

import Footer from '../../components/Footer'

import { Container, Img, Card, Input, Ul, Li, ContainerList, IconSearch, Title } from './styled'

import { GoSearch } from 'react-icons/go'

import { useNavigate } from 'react-router-dom'

export default function Feed() {
  const { states } = useContext(GlobalStateContext);
  const [category, setCategory] = useState('Árabe')


  const navigate = useNavigate()

  console.log('aki', states.restaurants)

  const onClickCategory = (name) => {
    setCategory(name)
  }

  return (
    <>
      <Container>
        <Title>FutureEats</Title>
        <div style={{ border: 0, borderBottom: '1px solid #6c6c6c', opacity: '25%', width: '100%', padding: 4 }} />
        <div style={{ position: 'relative', width: '82%', margin: '20px auto' }}>
          <Input onClick={() => { navigate('/busca') }} style={{ position: 'relative' }} placeholder="Restaurante" />
          <IconSearch >
            < GoSearch />
          </IconSearch>
        </div>

        <ContainerList>
          <ul style={{ display: 'flex', flexDirection: 'row', overflowX: 'scroll', listStyle: 'none' }}>
            {states.restaurants.map(res => (
              <>
                <li className={category === res.category ? 'active' : null} onClick={() => onClickCategory(res.category)} style={{ margin: 10 }}>{res.category}</li>

              </>
            ))}
          </ul>
        </ContainerList>

        <Ul>
          {states.restaurants.filter(restaurant => category === restaurant.category)
            .map(res => (
              <Card onClick={() => { navigate(`/restaurantes/${res.id}`) }}>
                <Li><Img src={res.logoUrl} /></Li>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  width: '100%'
                }}>
                  <div>
                    <Li style={{ color: '#57B16A', margin: 10 }}>{res.name}</Li>
                    <Li style={{ color: '#000000', opacity: '25%', margin: 10 }}>{res.deliveryTime}min</Li>
                  </div>
                  <Li style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', color: '#000000', opacity: '25%', margin: 10 }}>Frete: R${res.shipping.toFixed(2)}</Li>
                </div>
              </Card>
            ))}
        </Ul>
        < Footer />
      </Container>
    </>


  )

}
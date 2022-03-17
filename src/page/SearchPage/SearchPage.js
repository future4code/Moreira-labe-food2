import React from "react"


// import { Header } from '../../components/Header';
// import { CardRestaurant } from '../../components/CardRestaurant';
// import GlobalContext from '../../global/GlobalContext';
// import useProtectedPage from '../../hooks/useProtectedPage';
import {Link} from 'react-router-dom';
import { Card, Container, ContainerList, IconSearch, Img, Input, Li, Title, Ul } from "./styled";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import img from "../../images/Whopper_Hero.png";
import { GoSearch } from 'react-icons/go'



export default function Search(){




  return (
    <>
      <Container>

        <div style={{width: "100%"}}> 
          <MdOutlineArrowBackIosNew style={{float: 'left', marginLeft: "15px",}}/>
          <Title>Busca</Title>
        </div>         
        <div style={{border: 0,
            borderBottom: '1px solid #6c6c6c',
            opacity: '25%',
            width: '100%',
            padding: 4}}/>

        <div style={{position: 'relative',
          width: '90%',
          height: "56px",
          marginTop: "8px",
          borderRadius:"2px"}}>
          <Input style={{position: 'relative',}} placeholder="Restaurante"/>
          <IconSearch >
            < GoSearch/>
          </IconSearch>
        </div>

      <ContainerList></ContainerList>


      <Ul style={{
                boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",             
                //border:"1px solid #6c6c6c",
                borderRadius:"8px",
                width: '90%',
                height: "204px",
                marginTop: "8px"
              }}>
          <Card>
            <Li>
              <Img src={img} />
            </Li>
            <div
              style={{
                width: "100%",
              }}>
              <div>
                <Li style={{ color: "#57B16A",marginLeft: "-6%" }}>Bullguer Vila Madalena</Li>
              </div>
              <div 
                    style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#000000",
                    opacity: "25%",
                    marginLeft: "-10%",
                  }}>
                    <Li>30 - 45 min</Li>
                    <Li>Frete: R$6,00</Li>
              </div>
            </div>
          </Card>
        </Ul>
        



      </Container>

    </>
  )

}
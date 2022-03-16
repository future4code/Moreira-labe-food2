import React from "react";
import GlobalState from "./global/GlobalState";
import { GlobalStyled } from "./GlobalStyled";
import RouterApp from "./routes/Router";
import styled from "styled-components"
import 'swiper/swiper-bundle.css';

export const Container = styled.div`
margin: 50px auto;
display: flex;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
max-width:20%;
height: 70vh;
overflow-y: scroll;
overflow-x: hidden;

  @media (min-width: 768px) and (max-width: 1024px) {
     margin: 0;
     min-width:100% !important;
     height: 100%;
   }
   @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
     margin: 0;
     min-width:100% !important;
     height: 100%;
   }
   @media (min-width: 481px) and (max-width: 767px) {
     margin: 0;
     min-width:100% !important;
     height: 100%;
   }
   @media (min-width: 320px) and (max-width: 480px) {
       margin: 0;
       min-width: 100% !important;
       height: 100%;
   }
`
export default function App() {
  return (
    <Container>
      <GlobalState>
        <GlobalStyled />
        <RouterApp />
      </GlobalState>
    </Container>
  );
}


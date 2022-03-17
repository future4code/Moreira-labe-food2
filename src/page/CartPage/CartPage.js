import React from "react";
import Footer from "../../components/Footer";
import fries from "../../images/Batata-frita-Png-2-1024x1024.png";
import {
  Container,
  Img,
  Card,
  Ul,
  Li,
  ContainerList,
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
import Button from "@mui/material/Button";
import { GoSearch } from "react-icons/go";
import img from "../../images/Whopper_Hero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function Feed() {
  return (
    <>
      <Container>
        <div style={{ width: "100%" }}>
          <Title>Meu Carrinho</Title>
        </div>

        <StyleAdress style={{ width: "100%" }}>
          <p className="Delivery">Enderço de entrega</p>
          <strong>
            <p>Rua Alessandra Vieira, 42</p>
          </strong>
        </StyleAdress>

        <ContainerList></ContainerList>

        <Ul>
          <Card>
            <div
              style={{
                width: "100%",
              }}
            >
              <div>
                <Li style={{ color: "#57B16A", marginLeft: "-6%" }}>
                  Bullguer Vila Madalena
                </Li>
              </div>

              <Li
                style={{ color: "#000000", opacity: "25%", marginLeft: "-6%" }}
              >
                R. fradique Coutinho, 1136 - Vila Madalena
              </Li>

              <div
                style={{
                  color: "#000000",
                  opacity: "25%",
                  marginLeft: "-10%",
                }}
              >
                <Li>30 - 45 min</Li>
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
              <Img src={fries} style={{ width: "96px", height: "112px" }} />
            </Li>
            <div>
              <div>
                <Li style={{ color: "#57B16A" }}>Cheese Fries</Li>
                <Li
                  style={{
                    color: "#000000",
                    opacity: "25%",
                    display: "flex",
                    fontSize: "12px",
                  }}
                >
                  Porção de fritas temperadas com páprica e queijo derretido.
                </Li>
              </div>
              <Li>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <strong>R$15,00</strong>
                  <Counter>3</Counter>
                  <ButtonDel>Remover</ButtonDel>
                </div>
              </Li>
            </div>
          </MainCard>
        </Ul>
        <Freight>Frete R$6,00</Freight>

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
            <span>Dinheiro</span>
          </Cash>
          <CredidCard>
            <input type="radio" name="radio" />
            <span>Cartão de Crédito</span>
          </CredidCard>
        </ContainerCheck>

        <ButtonCart>Confirmar</ButtonCart>
        <Footer />
      </Container>
    </>
  );
}

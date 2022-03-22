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
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage"
import axios from 'axios';
import {BASE_URL} from "../../constants/Urls";
import {goToCar, goToFeed}from "../../routes/coordinator";


export default function Feed() {
  useProtectedPage()

  const { states, setters } = useContext(GlobalStateContext);
  const token = { headers: { auth: localStorage.getItem('token') } }
  const navigate = useNavigate();
  const itensCart =  JSON.parse(localStorage.getItem("cart"));
  const restaurantDetails =  JSON.parse(localStorage.getItem("restaurant"));


  const totalPrice =itensCart.reduce((getTotal,valor) => {
    return getTotal + valor.price * valor.quantity}, 0);

    const totalShipping = (itensCart.length !== 0 && restaurantDetails) ? restaurantDetails.shipping : 0;
  
  // const totalShipping =restaurantDetails.reduce((getTotalShipping,valor) => {
  //  return  getTotalShipping + valor.shipping}, 0);

   

  useEffect(() => {
    axios.get(`${BASE_URL}/profile/address`, token)
    .then(response => {
      setters.setAddress(response.data.address)
    })
    .catch((error) => {
        console.log(error.response.data)
    })
  }, []);

  const placeOrder = () => {
    const order = itensCart.map((item) => {
      return  {
        id: item.id,
        quantity: item.quantity
      }
    })
    let paymentMethod = ""
    if(document.getElementById("money").checked){
      paymentMethod = document.getElementById("money").value
    }else if (document.getElementById("creditcard").checked){
      paymentMethod = document.getElementById("creditcard").value
    }else {
      alert("Informe uma forma de pagamento")
      return false
    }

    const body = {products:order,
    paymentMethod:paymentMethod}
    
    axios.post(`${BASE_URL}/restaurants/${restaurantDetails[0].id}/order`, body, token)
    
    .then((response)=>{
      alert("Pedido Realizado com sucesso!")           
    })
    .catch((err)=>{
      alert("Erro!")
    })
        
  }

  const onClickorder = (event) => {
    placeOrder() //alteração
    // JSON.parse(localStorage.getItem("cart", ""))
    goToFeed(navigate)
  }

  const onDelete = (id) => {
    const newCart = itensCart.filter((produto) => {
      return produto.id !== id
    })
    localStorage.setItem("cart", JSON.stringify(newCart))
    goToCar(navigate)
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
              <div>
              {itensCart.length === 0 ? (
              <p>Carrinho vazio</p>
                  
              ): restaurant.loading }
              </div>
              <div
                style={{
                  width: "100%",
                }}
              >
                <div >
                  
                  {itensCart.length !== 0 ?(
                    <Li style={{ color: "#57B16A", marginLeft: "-6%" }}>
                      {restaurant.name}
                    </Li>
                      
                  ): restaurant.loading }
                  
                </div>
                {itensCart.length !== 0 ?(
                <Li
                  style={{ color: "#000000", opacity: "25%", marginLeft: "-6%" }}
                >
                  {restaurant.address}
                </Li>
                ): restaurant.loading }

                <div
                  style={{
                    color: "#000000",
                    opacity: "25%",
                    marginLeft: "-10%",
                  }}
                >
                  {itensCart.length !== 0 ?(
                  <Li>{restaurant.deliveryTime}</Li>
                  ): restaurant.loading }
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
                    <strong>R$ {produto.quantity * produto.price.toFixed(2)}</strong>
                    <Counter>{produto.quantity }</Counter>                   
                    <ButtonDel onClick={()=> onDelete(produto.id)}>Remover</ButtonDel>
                  </div>
                </Li>
              </div>
           
          </MainCard>
           )))}
        </Ul>

                 
          <Freight>
    

          <p>Frete {`R$${totalShipping}.00`}</p>
          
      
          </Freight>
        

        <PriceStyle>
          <p>SUBTOTAL</p>
         
          
          <p className="Total">R${( totalPrice + totalShipping ).toFixed(2)}</p>
           
          

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
            <input type="radio" id="money" value ="money" name="radio" />
            <span>Dinheiro </span>
          </Cash>
          <CredidCard>
            <input type="radio" id="creditcard" value="creditcard" name="radio" />
            <span> Cartão de crédito </span>
          </CredidCard>
        </ContainerCheck>

        <ButtonCart onClick={() => {onClickorder()}}>Confirmar</ButtonCart>
        <Footer />
      </Container>
    </>
  );
}
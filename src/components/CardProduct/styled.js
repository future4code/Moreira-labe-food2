import { Button } from "@mui/material"
import styled from "styled-components"
import {
  borderColor,
  neutralColor,
  primaryColor,
  secondaryColor,
} from "../../constants/colors"

export const ContainerProduct = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 10px auto; 
    width: 90%;
    height: auto;
    border-radius: 10px;
    position: relative;
  img {
    width: 6rem;
    margin: 0 1rem 0 0;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`

export const ContainerDetails = styled.div`
  font-family: "Roboto";
  display: flex;
  max-width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
  h3 {
    margin: 1.25rem 2.4rem 0rem 0rem;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: ${primaryColor};
  }
  p {
    margin: 0rem 1rem 0rem 0rem;
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: ${secondaryColor};
  }
  span {
    margin: 0rem 0.5rem 0.5rem 0rem;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: ${neutralColor};
    position: absolute;
    bottom: 0px;
  }
  button {
    padding: 0.5rem 1.281rem 0.563rem 1.344rem;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 8px;
    background-color: transparent;
    text-align: center;
    font-weight: bold;
    border: solid 1px ${neutralColor};
    position: absolute;
    right: 0rem;
    bottom: 0rem;
  }
`

export const QuantityContainer = styled.div`
  padding: 0.438rem 0.75rem;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border: solid 1px ${primaryColor};
  position: absolute;
  right: 0rem;
  top: 0rem;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: ${primaryColor};
`
export const ContainerModal = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
`
export const ModalSelect = styled.div`
  width: 20.5rem;
  height: 12.5rem;
  margin: 1.688rem 1rem 1.813rem;
  padding: 2.688rem 1rem 1.938rem 1rem;
  background-color: #fff;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    width: 18.5rem;
    height: 1.125rem;
    margin: 0.375rem 0 0 1rem;
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: ${neutralColor};
  }
`
export const Li = styled.li`
`
export const ImgProduct = styled.img`
    
    display: block;
    margin: 0 auto;
    object-fit: cover;
    order: 1;

    max-width:140px;
    max-height:140px;
    min-height:140px;
    min-width:140px;
    width: auto;
    height: auto;
    border-radius: 10px 0 0 10px;
`
export const ButtonAdd = styled.button`
  width: 90px;
  height: 31px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: solid 1px #5cb646;
  background-color: #fff;
  color: #5cb646;
  position: absolute;
  right: 0;
  bottom: 0;
`

export const ButtonDel = styled.button`
  width: 90px;
  height: 31px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: solid 1px #e02020;
  background-color: #fff;
  color: #e02020;
  position: absolute;
  right: 0;
  bottom: 0;
`
export const StyledButton = styled(Button)`
  align-self: flex-end;
`
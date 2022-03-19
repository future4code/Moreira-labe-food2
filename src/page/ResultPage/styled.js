import { Button } from "@mui/material"
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 50px;
`
export const Img = styled.img`
    width: 100%;
    height: 20vh;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
`
export const Card = styled.div`
    margin: 0 auto;
    background: #FFFFFF;
    width: 80%;
    //box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 10px;
`
export const Input = styled.input`
    padding: 20px 20px 20px 40px;
    width: 100%;
    border: 1px solid #b6b6b6;
    border-radius: 4px;
`
export const Ul = styled.ul`
    list-style: none;
    margin: 30px 0 100px 0 ;
`
export const Li = styled.li`
`
export const ContainerList = styled.div`
    
    margin: 10px;
    
`
export const IconSearch = styled.p`
    position: absolute;
    top: 22px; 
    left: 10px;
    color: #000000;
    opacity: 25%;
`
export const Title = styled.div`
    text-align: center;
    
    font-size: 17px;
    letter-spacing: -0.39px;
    border: 0;    
`

export const SubTitle = styled.div`
    text-align: start;    
    font-size: 17px;
    margin-top: 15px;
    margin-bottom: 5px;
    margin-left: 20px;    
`

export const MainCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 10px auto; 
    width: 90%;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 10px;
    position: relative;
`

export const ContainerModal = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background:rgba(1,1,1,0.5);
  position: fixed;
  top: 0;
  left: 0; 
`
export const ModalSelect = styled.div`
  width: 20.5rem;
  height: 13.5rem;
  margin: 1.688rem 1rem 1.813rem;
  padding: 2.688rem 1rem 1.938rem 1rem  ;
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
    color: #c8c8c8;
  }
`
export const StyledButton = styled(Button) `
    align-self: flex-end;
`
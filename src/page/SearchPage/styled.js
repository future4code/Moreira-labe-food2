import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 50px;
`
export const Ul = styled.ul`
    list-style: none;
    margin: 30px 0 10px 0;
    box-Shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 8px;
    width: 90%;
`
export const Img = styled.img`
    width: 90vw;
    height: 120px;
    margin-left: -9vw;
    border-radius: 8px;
    //object-fit: contain
`
export const Card = styled.div`
    height: 188px;
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
    opacity: 25%;
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
    margin: 0 auto;
    background: #FFFFFF;
    width: 80%;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 10px;
    position: relative;
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
import styled from 'styled-components'

export const ContainerAddress = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  background-color: #eeeeee;
  width: 100%;
  line-height: 1.8;

    .profilediv{
      padding: 20px;

    }
    .icon{
      margin-right: 20px;
      cursor: pointer;

    }

    .addressProfile{
      color: #b8b8b8;
    }

`

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  line-height: 1.8;

  .profilediv{
      padding: 20px;
      

  }
      .icon{
      margin-right: 20px;
      cursor: pointer;

    }
    

`

export const Header = styled.header`
  width: 100%;
  height:60px;
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: 20px;
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  align-items: center;
  color: black;
  justify-content: center;

    .title {
      text-align: center;
     
    }

`

export const Container = styled.div `

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
width: 100%;


`

export const P = styled.p `
  margin-left: 20px;
  border-bottom: 1px solid black;
  width: 90%;
  

`

export const Box = styled.div `
  width: 328px;
  height: 102px;
  padding: 16px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  

`

export const DivBox = styled.div `
display: flex;
flex-direction: column;
width: 100%;
overflow: scroll;
height: 250px;
  

`

export const ContainerHistory = styled.div `

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 20px;
line-height: 1.8;


    .date{
      width: 296px;
      height: 18px;
      margin: 9px 0 7px;
      font-size: 12px;
      letter-spacing: -0.29px;
      color: var(--black);
    }

    .restaurant{
     
      width: 296px;
      height: 18px;
      margin: 0 0 9px;
      font-size: 16px;
      letter-spacing: -0.39px;
      color: #5cb646;
    }

    .total{
      width: 296px;
      height: 18px;
      margin: 7px 0 0;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: -0.39px;
      color: var(--black);
      text-transform: uppercase;
    }
`
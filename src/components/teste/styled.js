import styled from "styled-components";

export const OrderCard = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
  width: 296px;
  height: 18px;
  margin: 0 0 9px;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #5cb646;
  }
  .date {
    width: 296px;
  height: 18px;
  margin: 9px 0 7px;
  font-size: 12px;
  letter-spacing: -0.29px;
  color: var(--black);
  }
  .total {
  width: 296px;
  height: 18px;
  margin: 7px 0 0;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.39px;
  color: var(--black);
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;

export const Box = styled.div `
  width: 328px;
  height: 102px;
  padding: 16px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-top: 20px;


`
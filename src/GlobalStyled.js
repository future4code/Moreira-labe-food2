import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
    font-size: 16px;
  };
  .text-link {
    color: inherit;
    text-decoration: inherit;
  };
`;
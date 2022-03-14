import React from "react";
import GlobalState from "./global/GlobalState";
import { GlobalStyled } from "./GlobalStyled";
import  RouterApp  from "./routes/Router";


export default function App() {
  return (
<>
  <GlobalState> 
  <GlobalStyled/>
    <RouterApp/>
  </GlobalState> 
</>
  );
}


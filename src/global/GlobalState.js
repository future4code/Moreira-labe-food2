import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext"


const GlobalState = (props) => {
    const [restaurants, setRestaurants] = useState([])
    const [loading, setLoading] = useState(true)
    const [newPassword, setNewPassword] = useState("")
    const [profile, setProfile] = useState({})
    const [address, setAddress] = useState({})
    const [historicoPedidos, setHistoricoPedidos] = useState()
    const [restaurantDetails, setRestaurantDetails] = useState([]);
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const token = { headers: { auth: localStorage.getItem('token') } }

        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants`, token)
            .then(response => {
                setRestaurants(response.data.restaurants)
            })
            .catch((error) => {
                console.log(error.response.message)
            })
    }, ['token']);
    
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart"))
          ? JSON.parse(localStorage.getItem("cart"))
          : []
      );
  
    const states = { restaurants, loading, newPassword, profile,address, historicoPedidos, restaurantDetails, produtos}
    const setters = { setRestaurants, setLoading, setNewPassword, setProfile, setAddress, setHistoricoPedidos, setRestaurantDetails, setProdutos };  

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState
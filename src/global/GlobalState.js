import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext"


const GlobalState = (props) => {
    const [restaurants, setRestaurants] = useState([])
    const [loading, setLoading] = useState(true)
    const [newPassword, setNewPassword] = useState("")

    useEffect(() => {
        const token = { headers: { auth: localStorage.getItem('token') } }

        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants`, token)
            .then(response => {
                setRestaurants(response.data.restaurants)
            })
            .catch((error) => {
                console.log(error.response.message)
            })
    }, []);

    const states = { restaurants, loading, newPassword }
    const setters = { setRestaurants, setLoading, setNewPassword };

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState
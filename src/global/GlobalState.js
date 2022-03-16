import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext"


const GlobalState = (props) => {
    const [food, setFood] = useState([])
    const [loading, setLoading] = useState(true)
    const [newPassword, setNewPassword] = useState("")

    useEffect(() => {
           const headers = {Authorization: localStorage.getItem("token"),};
           axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA`, headers)
           .then(response =>
            setFood(response.data),
            )
            .catch((error) => {
                console.log(error.response.message)
            })
            setLoading(false)
    }, []);

    const state = {food,loading, newPassword}
    const setters = { setFood, setLoading, setNewPassword  };
  

    return (
        <GlobalStateContext.Provider value={{state, setters }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState
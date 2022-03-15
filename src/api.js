import axios from 'axios';
import {BASE_URL} from "./constants/Urls";
import {goToFeed, goToAdress }from "./routes/coordinator";


const token = localStorage.getItem('token');

export const api = axios.create({
  baseURL: 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA',
  headers: {
    auth: token,
  }
});

export const login = (form, clear, navigate) => {
  axios.post(`${BASE_URL}/login`, form)
  .then((res)=>{
      localStorage.setItem("token", res.data.token);
      clear();
      goToFeed(navigate)
  })
  .catch((error)=>alert (error.response.data.message))
}




export const signup = (clear, form, navigate) => {
  
  const headers = {"Content-Type":"application/json"}
  
  axios.post(`${BASE_URL}/signup`, form, {headers})
  .then((response)=>{
     
      clear();
      goToAdress(navigate)
      console.log(response.data)
  })
  .catch((err)=> {
    alert("Cadastro não realizado!")
    console.log(err.response)
})
}
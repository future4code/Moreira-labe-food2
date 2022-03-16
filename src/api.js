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


export const signup = (body, clear, navigate) => {
  const headers = {"Content-Type":"application/json"}

  axios.post(`${BASE_URL}/signup`, body, headers)
  .then((res)=>{localStorage.setItem("token", res.data.token)
    clear()
    alert("Usuario cadastrado com sucesso!")
    goToAdress(navigate)
  })
  .catch((err)=>{
    alert("E-mail ou CPF já cadastrados!")
    console.log(err.response)
  })
      
}

export const putAdress = (body, clear, navigate) => {

  axios.put(`${BASE_URL}/address`, body, {
    headers: {
      auth: localStorage.getItem("token")
    }
  })
  .then((res)=>{
    localStorage.setItem("token", res.data.token)
    console.log(res.data)
    alert("Endereço cadastrado com sucesso!")
    clear()
    goToFeed(navigate)
  })
  .catch((err)=>{
    alert("Erro tente novamente!")
    console.log(err.response)
  })
      
}
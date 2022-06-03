import axios from 'axios';
import {BASE_URL} from "./constants/Urls";
import {goToFeed, goToAdress, goToProfile }from "./routes/coordinator";





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


export const putUpdateProfile = (body, navigate, clear) => {

  axios.put(`${BASE_URL}/profile`, body, {
    headers: {
      auth: localStorage.getItem("token")
    }
  })
  .then((response)=>{
    alert("Perfil atualizado com sucesso!")
    goToProfile(navigate)
    clear()
  })
  .catch((err)=>{
    
    console.log(err.response)
  })
      
}

export const putEditAdress = (body, clear, navigate) => {
  
    axios.put(`${BASE_URL}/address`, body, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
    .then((res)=>{
      
      alert("Endereço atualizado com sucesso!")
      goToProfile(navigate)
      clear()
    })
    .catch((err)=>{
      alert("Erro tente novamente!")
      console.log(err.response)
    })
        
  }

  

export const getProfile = (setForm) => {
  const token = localStorage.getItem('token')
  axios
      .get(`${BASE_URL}/profile`, {
          headers: {
              auth: token
          }
      })
      .then((response) => {
          setForm({
              name: response.data.user?response.data.user.name:"",
              email: response.data.user?response.data.user.email:"",
              cpf: response.data.user?response.data.user.cpf:"",
          })
      })
      .catch((err) => {
      })
}


export const getAdress = (setForm) => {
  const token = localStorage.getItem('token')
  axios
      .get(`${BASE_URL}/profile/address`, {
          headers: {
              auth: token
          }
      })
      .then((response) => {
          setForm({
              street: response.data.address?response.data.address.street:"",
              number: response.data.address?response.data.address.number:"",
              neighbourhood: response.data.address?response.data.address.neighbourhood:"",
              city: response.data.address?response.data.address.city:"",
              state: response.data.address?response.data.address.state:"",
              complement: response.data.address?response.data.address.complement:"",
          })
      })
      .catch((err) => {
      })
}




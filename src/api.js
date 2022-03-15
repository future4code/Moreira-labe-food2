import axios from 'axios';
import {BASE_URL} from "./constants/Urls";
import {goToFeed }from "./routes/coordinator";

const token = localStorage.getItem('token');

export const api = axios.create({
  baseURL: 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA',
  headers: {
    auth: token,
  }
});

export const login = (form, clear, navigate, setRightButtonText) => {
  axios.post(`${BASE_URL}/login`, form)
  .then((res)=>{
      localStorage.setItem("token", res.data.token);
      clear();
      setRightButtonText("Logout")
      goToFeed(navigate)
  })
  .catch((error)=>alert (error.response.data.message))
}

export const signup = (form, clear, navigate, setRightButtonText) => {
  axios.post(`${BASE_URL}/users/signup`, form)
  .then((res)=>{
      localStorage.setItem("token", res.data.token);
      clear();
      setRightButtonText("Logout")
      goToFeed(navigate)
  })
  .catch((error)=>alert("Usuário ou senha incorretos!"))
}
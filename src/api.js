import axios from 'axios';

const token = localStorage.getItem('token');

export const api = axios.create({
  baseURL: 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA',
  headers: {
    auth: token,
  }
});
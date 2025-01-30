import axios from 'axios';

const apiRequest = axios.create({
  baseURL: "https://final-backend-realestate.onrender.com",//put an render deployment link
  withCredentials: true,
});

export default apiRequest;

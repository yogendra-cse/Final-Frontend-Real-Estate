import axios from 'axios';

const apiRequest = axios.create({
  baseURL: "https://final-backend-realestate.onrender.com",
  withCredentials: true,
});

export default apiRequest;

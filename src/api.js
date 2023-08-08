import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://13.48.126.151:3000/',
  withCredentials: true,
});

export default instance;

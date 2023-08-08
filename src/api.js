import axios from 'axios';

const csrfTokenMetaTag = document.querySelector('meta[name="csrf-token"]');
const csrfToken = csrfTokenMetaTag ? csrfTokenMetaTag.getAttribute('content') : null;

const instance = axios.create({
  baseURL: '/', 
  withCredentials: true,
  headers: {
    common: {
      'X-CSRF-Token': csrfToken,
    },
  },
});

export default instance;

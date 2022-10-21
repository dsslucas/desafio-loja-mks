import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC',
});

export default api;
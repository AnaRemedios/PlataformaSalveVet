import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://sua-api.com', // URL base da sua API
  headers: {
    'Content-Type': 'application/json',
    // Adicione outros cabeçalhos se necessário
  },
});

export default axiosInstance;

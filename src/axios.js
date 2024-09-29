import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://api.weatherstack.com', 
  headers: {
    'Content-Type': 'application/json'
  }
});

// Intercepta as requisições para adicionar a chave de acesso como parâmetro de consulta
apiClient.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params.access_key = '618353e8502ed150902d107b464404d7'; 
  return config;
});

export default apiClient;
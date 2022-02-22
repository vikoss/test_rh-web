import { post, get } from 'axios';

const authenticate = (credentials) => new Promise((resolve, reject) => {
  post('http://127.0.0.1:9009/api/auth/login', credentials)
    .then(({ data }) => {
      localStorage.setItem('rh-jwt', JSON.stringify(data));
      resolve(data);
    })
    .catch(({ response }) => reject(response));
});

const me = () => new Promise((resolve, reject) => {
  const JWT = JSON.parse(localStorage.getItem('rh-jwt')).access_token;
  get('http://127.0.0.1:9009/api/auth/me', {
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  })
    .then(({ data }) => {
      localStorage.setItem('rh-me', JSON.stringify(data));
      resolve(data);
    })
    .catch(({ response }) => reject(response));
});

export { authenticate, me };

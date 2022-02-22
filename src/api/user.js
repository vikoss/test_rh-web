import { get } from 'axios';

const JWT = JSON.parse(localStorage.getItem('rh-jwt')).access_token;

export default (id) => new Promise((resolve, reject) => {
  get(`http://127.0.0.1:9009/api/users/${id}`, {
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  })
    .then(({ data }) => {
      resolve(data);
    })
    .catch(({ response }) => reject(response));
});

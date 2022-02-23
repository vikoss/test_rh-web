import { get } from 'axios';
import { JWT, currentUser } from '../helpers/localStorage';

const getUser = (id) => new Promise((resolve, reject) => {
  get(`http://127.0.0.1:9009/api/users/${id}`, {
    headers: {
      Authorization: `Bearer ${JWT()}`,
    },
  })
    .then(({ data }) => {
      resolve(data);
    })
    .catch(({ response }) => reject(response));
});

const getJobs = () => new Promise((resolve, reject) => {
  get(`http://127.0.0.1:9009/api/users/${currentUser().id}/jobs`, {
    headers: {
      Authorization: `Bearer ${JWT()}`,
    },
  })
    .then(({ data }) => {
      resolve(data);
    })
    .catch(({ response }) => reject(response));
});

export { getJobs, getUser };

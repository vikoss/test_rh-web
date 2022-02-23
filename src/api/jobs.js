import { post, get } from 'axios';
import { JWT } from '../helpers/localStorage';

const storeJob = (job) => new Promise((resolve, reject) => {
  post('http://127.0.0.1:9009/api/jobs', job, {
    headers: {
      Authorization: `Bearer ${JWT()}`,
    },
  })
    .then(({ data }) => {
      resolve(data);
    })
    .catch(({ response }) => reject(response));
});

const me = () => new Promise((resolve, reject) => {
  get('http://127.0.0.1:9009/api/auth/me', {
    headers: {
      Authorization: `Bearer ${JWT()}`,
    },
  })
    .then(({ data }) => {
      resolve(data);
    })
    .catch(({ response }) => reject(response));
});

export { storeJob, me };

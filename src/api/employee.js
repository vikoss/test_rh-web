import { post, get } from 'axios';

const JWT = JSON.parse(localStorage.getItem('rh-jwt')).access_token;

const storeEmployee = (employee) => new Promise((resolve, reject) => {
  const body = new FormData();
  body.append('name', employee.name);
  body.append('surname', employee.surname);
  body.append('dni', employee.dni);
  body.append('date_of_birth', employee.date_of_birth);
  body.append('photo', employee.photo);
  post('http://127.0.0.1:9009/api/employees', employee, {
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  })
    .then(({ data }) => {
      resolve(data);
    })
    .catch(({ response }) => reject(response));
});

const attachJobToEmployee = ({ employeeId, jobId }) => new Promise((resolve, reject) => {
  get(`http://127.0.0.1:9009/api/employees${employeeId}/jobs`, jobId, {
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  })
    .then(({ data }) => {
      resolve(data);
    })
    .catch(({ response }) => reject(response));
});

export { storeEmployee, attachJobToEmployee };

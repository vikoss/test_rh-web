import { post } from 'axios';
import { JWT } from '../helpers/localStorage';

const storeEmployee = (employee) => new Promise((resolve, reject) => {
  const body = new FormData();
  body.append('name', employee.name);
  body.append('surname', employee.surname);
  body.append('dni', employee.dni);
  body.append('date_of_birth', employee.date_of_birth);
  body.append('photo_file', employee.photo_file);
  post('http://127.0.0.1:9009/api/employees', body, {
    headers: {
      Authorization: `Bearer ${JWT()}`,
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(({ data }) => {
      resolve(data);
    })
    .catch(({ response }) => reject(response));
});

const attachJobToEmployee = ({ employeeId, jobId }) => new Promise((resolve, reject) => {
  post(`http://127.0.0.1:9009/api/employees/${employeeId}/jobs`, { jobId }, {
    headers: {
      Authorization: `Bearer ${JWT()}`,
    },
  })
    .then(({ data }) => {
      resolve(data);
    })
    .catch(({ response }) => reject(response));
});

export { storeEmployee, attachJobToEmployee };

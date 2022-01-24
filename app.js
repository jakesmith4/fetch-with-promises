import EasyHTTP from './easyhttp2.js';

const http = new EasyHTTP();

// GET Request (GET DATA FROM A SERVER)
http
  .get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    console.log(response);
  })
  .catch((err) => err);

// User Data
const data = {
  name: 'John Doe',
  userName: 'Johndoe',
  email: 'jdoe@gmail.com',
};

// POST Request (POST DATA TO A SERVER)
http
  .post('https://jsonplaceholder.typicode.com/users', data)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => err);

// PUT Request (UPDATE POST TO A SERVER)
http
  .put('https://jsonplaceholder.typicode.com/users/2', data)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => err);

// DELETE USER
http
  .delete('https://jsonplaceholder.typicode.com/users/2')
  .then((response) => {
    console.log(response);
  })
  .catch((err) => err);

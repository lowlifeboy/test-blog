import axios from 'axios';

const apikey = '5f36d664dc407a17c590ace1';

const restdb = axios.create({
  baseURL: 'https://testdb-94b3.restdb.io/rest',
  timeout: 10000,
  headers: {'x-apikey': apikey},
});

export {apikey, restdb};

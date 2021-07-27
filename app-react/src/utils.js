import axios from 'axios';

const BACKEND = process.env.REACT_APP_BACKEND || 'http://localhost:3030';

export const axiosInstance = axios.create({
  baseURL: `${BACKEND}/api`,
  timeout: 5000,
  // headers: { 'X-Custom-Header': 'foobar' }
});

export function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};
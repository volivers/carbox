import axios from 'axios';

export const apiCall = (method: any, url: string, token: string, payload = {}) =>
  axios({
    method,
    data: payload,
    url,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json; charset=utf-8'
    },
  });
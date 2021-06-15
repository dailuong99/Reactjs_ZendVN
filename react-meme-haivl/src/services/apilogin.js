// Cấu hình tất cả thông tin axios ở trong đây
import axios from 'axios';
import Storage from './../helpers/storage'
export const apilogin = {
  call: function () {
    return axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },
  callWithAuth(headers ={}) {
    const token = Storage.getToken();
    return axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        ...headers
      }
    });

  }
}

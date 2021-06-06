// Cấu hình tất cả thông tin axios ở trong đây
import axios from 'axios';

export const apilogin = {
  call: function () {
    return axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },
  callWithAuth() {
    return axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bear my-token'
      }
    });

  }
}

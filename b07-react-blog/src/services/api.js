// Cấu hình tất cả thông tin axios ở trong đây
import axios from 'axios';

export const api = {
    call: function() {
        return axios.create({
            baseURL: process.env.REACT_APP_BASE_URL
        });
    }
}
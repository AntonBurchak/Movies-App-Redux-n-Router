import axios from 'axios';

export default (url, method = 'get', data) => {
    return axios[method](`http://localhost:3001/${url}`, data);
}
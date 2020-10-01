import axios from 'axios';

const callApi = (url, method = 'get', data) => {
    return axios[method](`http://localhost:3001/${url}`, data);
}

export default callApi;
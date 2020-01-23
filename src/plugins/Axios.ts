import axios from 'axios';
import ApiService from '@/modules/ApiService';

const instance = axios.create({
    baseURL: 'http://91.205.75.47:9090',
    timeout: 10000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8080',
    },
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.request.status === 401 || error.request.status === 0) {
            ApiService.handleUnauthorized();
        }
        throw error;
    },
);
export default instance;

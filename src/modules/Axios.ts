import axios from 'axios';
import ApiService from "@/modules/ApiService";

const instance = axios.create({
    baseURL: 'http://localhost:9090',
    timeout: 10000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
});

instance.interceptors.response.use(
    (response) => {
        return response;
    }, (error) => {
        if (error.request.status === 401 || error.request.status === 0) {
            ApiService.handleUnauthorized();
        }
        throw error;
    },
);
export default instance;

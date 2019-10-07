import axios from 'axios';

export default class ApiService {

    private static readonly AUTH_AUTHORIZATION = 'Basic YnJvd3Nlcjo=';
    private static readonly AUTH_PREFIX = 'Bearer ';
    private static HTTP = axios.create({
        baseURL: 'http://localhost:9090',
        timeout: 10000,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });

    public static setToken(accessToken: string): void {
        this.HTTP.defaults.headers.common.Authorization = this.AUTH_PREFIX + accessToken;
    }

    public static sendAuth() {
        this.HTTP.defaults.headers.common.Authorization = this.AUTH_AUTHORIZATION;
    }

    public static async post(url: string, param: object) {
        try {
            return this.HTTP.post(url, param);
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    public static async get(url: string) {
        console.log(this.HTTP.defaults.headers);
        try {
            return this.HTTP.get(url);
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

}

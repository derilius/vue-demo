import instance from "@/modules/Axios";
import StorageService from "@/modules/StorageService";
import router from "@/router";

export default class ApiService {

    private static readonly AUTH_AUTHORIZATION = 'Basic YnJvd3Nlcjo=';
    private static readonly AUTH_PREFIX = 'Bearer ';
    private static HTTP = instance;

    static handleUnauthorized() {
        ApiService.sendAuth();
        StorageService.deleteTokenData();
        router.push('/auth/login');
    }

    public static setToken(accessToken: string): void {
        this.HTTP.defaults.headers.common.Authorization = this.AUTH_PREFIX + accessToken;
    }

    public static sendAuth() {
        this.HTTP.defaults.headers.common.Authorization = this.AUTH_AUTHORIZATION;
    }

    public static async post(url: string, param: object) {
        try {
            const response = await this.HTTP.post(url, param);
            return response.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    public static async get(url: string) {
        try {
            const response = await this.HTTP.get(url);
            return response.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

}

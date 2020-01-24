import instance from '@/plugins/Axios';
import StorageService from '@/modules/StorageService';
import router from '@/router';

export default class ApiService {

    private static readonly AUTH_AUTHORIZATION = 'Basic YnJvd3Nlcjo=';
    private static readonly AUTH_PREFIX = 'Bearer ';
    private static HTTP = instance;

    public static handleUnauthorized() {
        ApiService.sendAuth();
        StorageService.deleteTokenData();
        router.push('/auth/login'); // TODO:przenieść gdzieś?
    }

    public static setToken(accessToken: string): void {
        this.HTTP.defaults.headers.common.Authorization = this.AUTH_PREFIX + accessToken;
    }

    public static sendAuth() {
        this.HTTP.defaults.headers.common.Authorization = this.AUTH_AUTHORIZATION;
    }

    public static async post(url: string, param?: object) {
        const response = await this.HTTP.post(url, param);
        return response.data;
    }

    public static async put(url: string, param?: object) {
        const response = await this.HTTP.put(url, param);
        return response.data;
    }

    public static async get(url: string) {
        const response = await this.HTTP.get(url);
        return response.data;
    }

    public static async remove(url: string) {
        const response = await this.HTTP.delete(url);
        return response.data;
    }

}

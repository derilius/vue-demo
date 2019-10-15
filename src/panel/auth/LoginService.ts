import ApiService from '@/modules/ApiService';
import router from '@/router';
import StorageService from '@/modules/StorageService';

export default class LoginService {

    public static async login(api: object) {
        ApiService.sendAuth();
        const response = await ApiService.post('/public/login', api);
        StorageService.setTokenData(response);
        ApiService.setToken(response.access_token);
        await router.push('/about');
    }

    public static async logout() {
        await ApiService.get('/public/logout');
        ApiService.sendAuth();
        StorageService.deleteTokenData();
        await router.push('/auth/login');
    }

    public static async register(formData: object) {
        await ApiService.post('/public/register', formData);
        await router.push('/auth/login');
    }

    public static async getUserInfo() {
        return await ApiService.get('/private/user');
    }

    public static async getAdminInfo() {
        return await ApiService.get('/private/admin');
    }

    public static async activate(token: string) {
        return await ApiService.post(`/public/activate/${token}`);
    }

    public static async remindPassword(mail: string) {
        return await ApiService.post(`/public/remind-password/${mail}`);
    }

    public static async resetPassword(formData: object, token: string) {
        return await ApiService.post(`/public/reset-password/${token}`, formData);
    }

}

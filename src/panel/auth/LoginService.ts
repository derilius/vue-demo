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

    public static register(formData: object) {
        return ApiService.post('/public/register', formData);
    }

    public static getUserInfo() {
        return ApiService.get('/user');
    }

    public static activate(token: string) {
        return ApiService.post(`/public/activate/${token}`);
    }

    public static remindPassword(mail: string) {
        return ApiService.post(`/public/remind-password/${mail}`);
    }

    public static resetPassword(formData: object, token: string) {
        return ApiService.post(`/public/reset-password/${token}`, formData);
    }

}

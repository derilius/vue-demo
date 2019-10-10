import ApiService from "@/modules/ApiService";
import router from "@/router";
import StorageService from "@/modules/StorageService";

export default class LoginService {

    public static async login(api: object) {
        ApiService.sendAuth();
        let response = await ApiService.post("/public/login", api);
        StorageService.setTokenData(response);
        ApiService.setToken(response.access_token);
        await router.push("/about");
    }

    public static async logout() {
        await ApiService.get("/public/logout");
        ApiService.sendAuth();
        StorageService.deleteTokenData();
        await router.push("/auth/login");
    }

    public static async register(formData: object) {
        await ApiService.post("/public/register", formData);
        await router.push("/auth/login");
    }

    public static async getUserInfo() {
        console.log(StorageService.getTokenData());
        return await ApiService.get("/private/user");
    }

}

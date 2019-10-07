import ApiService from "@/modules/ApiService";
import router from "@/router";
import StorageService from "@/modules/StorageService";

export default class LoginService {

    public static async login(login: string, password: string) {
        let api = {username: login, password: password};
        ApiService.sendAuth();
        let response = await ApiService.post("/public/login", api);
        StorageService.setTokenData(response.data);
        ApiService.setToken(response.data.access_token);
        await router.push("/about");
    }

    public static async logout() {
        await ApiService.get("/public/logout");
        ApiService.sendAuth();
        StorageService.deleteTokenData();
        const test = StorageService.getTokenData();
        await router.push("/login");
    }

}

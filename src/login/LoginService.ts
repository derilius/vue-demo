import axios from 'axios';
import router from "@/router";

export default class LoginService {

    private HTTP = axios.create({
        baseURL: `http://localhost:9090`,
        headers: {
            Authorization: "Basic YnJvd3Nlcjo=",
            Accept: "application/json"
        }
    });

    public async post(login: string, password: string) {
        let api = {username: login, password: password};
        try {
            let response = await this.HTTP.post("/public/login", api);
            localStorage.setItem('token', response.data);
            router.push("/about");
        } catch (e) {
            console.error(e);
        }
    }

}

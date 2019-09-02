import axios from 'axios';

export default class LoginService {

    private HTTP = axios.create({
        baseURL: `http://192.168.1.108:9090`,
        headers: {
            "Authorization": "Basic YnJvd3Nlcjo="
        }
    });

    public async get() {
        let response = await this.HTTP.get("/public/user")
            .then(response => {
                console.log(response);
                return response.data;
            })
            .catch(error => console.log(error));
        console.log(response);
    }

    public async post(login: string, password: string) {
        console.log(login, password)
        try {
            let response = await this.HTTP.post("/public/login",
                {
                    username: login,
                    password: password,
                });
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    }

}
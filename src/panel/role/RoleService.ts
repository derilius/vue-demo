import ApiService from '@/modules/ApiService';

export default class RoleService {

    public static getAll() {
        return ApiService.get('/role/all');
    }

    public static save(name: string) {
        return ApiService.post(`/role/${name}`);
    }

    public static delete(id: number) {
        return ApiService.remove(`/role/${id}`);
    }

}

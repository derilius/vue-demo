import ApiService from '@/modules/ApiService';

export default class PeopleService {

    public static getAll() {
        return ApiService.get('/person/all');
    }

    public static getRoles() {
        return ApiService.get('/role/all');
    }

    public static save(formData: {}) {
        return ApiService.post('/person', formData);
    }

    public static update(id: number, formData: {}) {
        return ApiService.put(`/person/${id}`, formData);
    }

    public static delete(id: number) {
        return ApiService.remove(`/person/${id}`);
    }

}

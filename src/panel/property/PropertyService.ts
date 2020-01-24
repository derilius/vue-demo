import ApiService from '@/modules/ApiService';

export default class PropertyService {

    public static getAll() {
        return ApiService.get('/property/all');
    }

    public static getPeople() {
        return ApiService.get('/person/all');
    }

    public static save(formData: {}) {
        return ApiService.post('/property', formData);
    }

    public static update(id: number, formData: {}) {
        return ApiService.put(`/property/${id}`, formData);
    }

    public static delete(id: number) {
        return ApiService.remove(`/property/${id}`);
    }

}

import ApiService from '@/modules/ApiService';

export default class TransactionService {

    public static getAll() {
        return ApiService.get('/transaction/all');
    }

    public static getPeople() {
        return ApiService.get('/person/all');
    }

    public static getProperties() {
        return ApiService.get('/property/all');
    }

    public static save(formData: {}) {
        return ApiService.post('/transaction', formData);
    }

    public static update(id: number, formData: {}) {
        return ApiService.put(`/transaction/${id}`, formData);
    }

    public static delete(id: number) {
        return ApiService.remove(`/transaction/${id}`);
    }

}

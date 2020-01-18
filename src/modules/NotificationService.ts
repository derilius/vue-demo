import Vue from 'vue';

export default class NotificationService {

    public static success(message: string): void {
        Vue.prototype.$awn.success(message, {labels: {success: 'Powodzenie'}});
    }

    public static info(message: string): void {
        Vue.prototype.$awn.info(message, {labels: {info: 'Informacja'}});
    }

    public static error(error?: any): void {
        const unwrappedError = error.message;
        const isArray = Array.isArray(unwrappedError);
        const msg = isArray && unwrappedError.length > 0 ? unwrappedError[0] : unwrappedError;
        Vue.prototype.$awn.alert('Podano niepoprawne dane!', {labels: {alert: 'Błąd'}});
    }

    public static warn(message: string): void {
        Vue.prototype.$awn.warning(message, {labels: {warning: 'Ostrzeżenie'}});
    }

}

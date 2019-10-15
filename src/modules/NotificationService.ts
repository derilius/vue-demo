import Vue from 'vue';

export default class NotificationService {

    public static success(message: string): void {
        Vue.prototype.$awn.success(message, {labels: {success: 'Powodzenie'}});
    }

    public static info(message: string): void {
        Vue.prototype.$awn.info(message, {labels: {info: 'Informacja'}});
    }

    public static error(error?: any): void {
        const unwrappedError = error.response.data.message;
        const isArray = Array.isArray(unwrappedError);
        const msg = isArray && unwrappedError.length > 0 ? unwrappedError[0] : unwrappedError;
        Vue.prototype.$awn.alert(msg, {labels: {alert: 'Błąd'}});
    }

    public static warn(message: string): void {
        Vue.prototype.$awn.warning(message, {labels: {warning: 'Ostrzeżenie'}});
    }

}

export interface TransactionType {
    propertyId: number;
    propertyAddress: string;
    personId: number;
    personName: string;
    date: any;
    price: number;
    id: number;
}

export interface SimplePerson {
    firstName: string;
    lastName: string;
    fullName: string;
    id: number;
}

export interface SimpleProperty {
    personName: string;
    address: string;
    id: number;
}

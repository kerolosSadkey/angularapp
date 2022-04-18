export interface Iuser {

    id: number;
    Name: string;
    email: string;
    phone: string[];
    address:{
        city: string;
    postalcode:string;
    street:string;
    }
    password: string;
    Delivery: string;
}

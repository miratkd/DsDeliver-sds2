import { type } from "os";

export type Product={

 id: number;
 name : string;
 price : number;
 description : string;
 imageUri : string;

}

export type OrderLocationData = {
    address: string;
    latitude: number;
    longitude: number;
}

type ProductId = {
    id: number;
}

export type OrderPayload = {
    products: ProductId[];
} & OrderLocationData;

export type PendingOrder = {
    id: number;
    address: string;
    latitude: number,
    longitude: number,
    moment: string,
    status: string,
    products: Product[]
}
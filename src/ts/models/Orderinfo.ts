import { Product } from "./Product";

export class Orderinfo {
    product: Product;
    quantity: number;

        constructor(
            product: Product,
            quantity: number
        )
        
        {  
            this.product = product;
            this.quantity = quantity;
     }};

import { updateCartLocalStorage } from "../functions/updateLocalStorage";
import { Orderinfo } from "./Orderinfo";
import { productList } from "./productList";

export class Cart {
    orderInfoList: Orderinfo[];

    constructor(){
        this.orderInfoList = JSON.parse(localStorage.getItem("savedCartList")) || [];
    }

    addToCart(i:number) {
    let newCart = productList[i];
    let cart1 = new Orderinfo (newCart,1);
    this.orderInfoList.push(cart1);
    let p = document.getElementById("floatingcartnumber");
    p.innerHTML = this.orderInfoList.length.toString();

    updateCartLocalStorage();
    }

    removeFromCart() {

    }
}
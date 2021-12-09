import { productList } from "../models/productList";
import { updateLocalStorage } from "./updateLocalStorage";
export function removeFromCart(i: number) {
  for (let i = 0; i < productList.length; i++) {
    if (productList[i].cart === true) {
      productList[i].cart = !productList[i].cart;
      updateLocalStorage();
    }
  }
}

/*export function deleteItem() {
  let deleteButton = document.getElementsByClassName("fa-times");
  for (let i = 0; i < deleteButton.length; i++) {
    let button = deleteButton[i];
    button.addEventListener("click", () => {
      button.parentElement.parentElement.parentElement.remove();
    });
  }
}*/

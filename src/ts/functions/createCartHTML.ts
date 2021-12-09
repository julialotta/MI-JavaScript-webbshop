import { productList } from "../models/productList";
import { removeFromCart } from "./removeFromCart";
import { showTotal } from "./showTotal";
import { minusDogs } from "./changeTotal";
export function createCartHTML() {
  let productsCartContainer:HTMLElement = document.getElementById("cart");
  productsCartContainer.innerHTML = "";
  let heading = document.createElement("h3");
  heading.innerHTML = "Dina varor";
  productsCartContainer.appendChild(heading);
  let productDiv = document.createElement("div");
  productDiv.className = "cartContainer";
  productsCartContainer.appendChild(productDiv);
   let cartTotal: HTMLSpanElement = document.createElement("span");
  cartTotal.innerHTML = "";
  
  for (let i = 0; i < orderInfoList.length; i++){

    if (orderInfoList.length == 0) {
      console.log("inget i varukorgen"); 
    } else {      
      console.log(orderInfoList.length);
      let dogProduct: HTMLDivElement = document.createElement("div");
      dogProduct.className = "dogproduct";
      productDiv.appendChild(dogProduct);
    
      let dogImageCartContainer: HTMLDivElement = document.createElement("div");
      dogImageCartContainer.className = "dogimgcontainer";
      dogProduct.appendChild(dogImageCartContainer);

      let cartIMG: HTMLImageElement = document.createElement("img");
      cartIMG.src = orderInfoList[i].product.picture;
      cartIMG.alt = orderInfoList[i].product.pictureAlt;
      dogImageCartContainer.appendChild(cartIMG);

      let cartIconContainer: HTMLDivElement = document.createElement("div");
      cartIconContainer.classList.add("crossIconContainer");
      let cartIcon: HTMLElement = document.createElement("i");
      cartIcon.classList.add("fas");
      cartIcon.classList.add("fa-times");
      let dogCartName: HTMLElement = document.createElement("h5");
      dogCartName.innerHTML = productList[i].name;
      let cartDogPrice: HTMLElement = document.createElement("p");
      cartDogPrice.classList.add("dogprice");
      cartDogPrice.innerHTML = "$" + productList[i].price;

      let totalOfDogs: HTMLSpanElement = document.createElement("span");
      totalOfDogs.classList.add("cartTotalDogs");
      totalOfDogs.innerHTML = "Hundar: ";

      let dogsShowTotal: HTMLSpanElement = document.createElement("span");
      dogsShowTotal.classList.add("totalOfDogs");
      dogsShowTotal.innerHTML = productList[i].amount;
      console.log(productList[i].amount);
      console.log(productList[i].price);

      let removeADogButton: HTMLElement = document.createElement("i");
      removeADogButton.classList.add("fas");
      removeADogButton.classList.add("fa-minus");

      let addADogButton: HTMLElement = document.createElement("i");
      addADogButton.classList.add("fas");
      addADogButton.classList.add("fa-plus");

      removeADogButton.addEventListener("click", () => {
        minusDogs();
      });

      totalOfDogs.appendChild(removeADogButton);
      totalOfDogs.appendChild(dogsShowTotal);
      totalOfDogs.appendChild(addADogButton);

      dogProduct.appendChild(dogImageCartContainer);
      dogImageCartContainer.appendChild(cartIMG);
      
      dogImageCartContainer.appendChild(cartIconContainer);
      
      let cartIcon: HTMLElement = document.createElement("i");
      cartIcon.className = "bi bi-x-circle";
      cartIconContainer.appendChild(cartIcon);
      
      let dogCartName: HTMLElement = document.createElement("h5");
      dogCartName.innerHTML = orderInfoList[i].product.name;
      dogProduct.appendChild(dogCartName);
      dogProduct.appendChild(cartDogPrice);
      dogProduct.appendChild(totalOfDogs);

      let productsCartContainer =
        document.getElementsByClassName("cartContainer")[0];


      let cartDogPrice: HTMLElement = document.createElement("p");
      cartDogPrice.className = "dogprice";
      cartDogPrice.innerHTML = "$" + orderInfoList[i].product.price;
      dogProduct.appendChild(cartDogPrice);

      cartIcon.addEventListener("click", () => {
        removeFromCart(i);
      });
    }


  }
  let categoryCartContainer = document.getElementById("cart");
  cartTotal.innerHTML = "Totalt:";
  categoryCartContainer.appendChild(cartTotal);

  cartTotal.classList.add("cartTotal");

  let totalSum: HTMLSpanElement = document.createElement("span");
  totalSum.id = "cartTotal";
  totalSum.classList.add("addSum");

  cartTotal.appendChild(totalSum);

  let doneCartButton: HTMLButtonElement = document.createElement("button");
  doneCartButton.classList.add("checkoutBtn");
  doneCartButton.type = "submit";
  doneCartButton.innerHTML = "Gå vidare till betalning";

  categoryCartContainer.appendChild(doneCartButton);

  showTotal();
  //changeTotal();
}

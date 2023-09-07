const arrayCart = [];
let total = 0;
const carList = document.getElementById("car-list");
const buttonOpenCart = document.getElementById("car-img");
const buttonDeleteCart = document.getElementById("delete-cart");
const cartElements = document.querySelector(".cart-elements");
const totalElements = document.getElementById("total");

const btn = document.querySelector(".btn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");

buttonOpenCart.addEventListener("click", (e) => {
  e.preventDefault();
  carList.classList.remove("invisible");
  buttonOpenCart.style.visibility = "hidden";
  buttonOpenCart.style.color = "rgb(255, 255, 255)";
});
buttonDeleteCart.addEventListener("click", (e) => {
  e.preventDefault();
  carList.classList.add("invisible");
  buttonOpenCart.style.visibility = "visible";
});

// *************************************************************************************

btn1.addEventListener("click", () => {
  addToCart("img/item1.png", "Apple Watch", "Apple Watch SE (1st Gen)", 50, 1);
  buttonOpenCart.style.color = "rgb(0, 250, 0)";
});
btn2.addEventListener("click", () => {
  addToCart("img/item2.png", "Apple Macbook", "Apple MacBook Pro", 100, 2);
  buttonOpenCart.style.color = "rgb(0, 250, 0)";
});
btn3.addEventListener("click", () => {
  addToCart("img/item3.png", "Smartphone", "Samsung Galaxy S22", 150, 3);
  buttonOpenCart.style.color = "rgb(0, 250, 0)";
});
btn4.addEventListener("click", () => {
  addToCart(
    "img/item4.png",
    "Samsung Galaxy",
    "Samsung Galaxy Z Flip 4",
    200,
    4
  );
  buttonOpenCart.style.color = "rgb(0, 250, 0)";
});
btn5.addEventListener("click", () => {
  addToCart("img/item5.png", "Iphone 14", "Iphone 14 Pro Max", 250, 5);
  buttonOpenCart.style.color = "rgb(0, 250, 0)";
});
btn6.addEventListener("click", () => {
  addToCart("img/item6.png", "PS5", "PlayStation 5", 300, 6);
  buttonOpenCart.style.color = "rgb(0, 250, 0)";
});
btn7.addEventListener("click", () => {
  addToCart("img/item7.png", "Xbox One", "Xbox One S", 350, 7);
  buttonOpenCart.style.color = "rgb(0, 250, 0)";
});
btn8.addEventListener("click", () => {
  addToCart("img/item8.png", "PS4", "Play Station 4", 400, 8);
  buttonOpenCart.style.color = "rgb(0, 250, 0)";
});

// *************************************************************************************

function addToCart(src, alt, name, price, order) {
  const existElement = arrayCart.find((element) => element.order === order);
  if (existElement) {
    existElement.quantity++;
  } else {
    arrayCart.push({ src, alt, name, price, quantity: 1, order });
  }
  console.log(arrayCart);
  total += price;
  renderElementsCart();
  renderTotal();
}

// *************************************************************************************

function renderElementsCart() {
  cartElements.innerHTML = " ";
  arrayCart.forEach((item, index) => {
    const divElement = document.createElement("div");
    divElement.className = "element";

    const imgElement = document.createElement("img");
    imgElement.src = item.src;
    imgElement.alt = item.alt;
    divElement.appendChild(imgElement);

    const divInfoElement = document.createElement("div");
    divInfoElement.className = "info-element";

    const nameElement = document.createElement("h3");
    nameElement.textContent = item.name;
    divInfoElement.appendChild(nameElement);

    const divPrinceContainer = document.createElement("div");
    divPrinceContainer.className = "price-container";

    const priceElement = document.createElement("p");
    priceElement.textContent = `$${item.price}`;
    divPrinceContainer.appendChild(priceElement);

    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.value = item.quantity;
    inputElement.name = "quantity";
    inputElement.className = "quantity";
    inputElement.readOnly = true;
    divPrinceContainer.appendChild(inputElement);

    const deleteItem = document.createElement("button");
    deleteItem.textContent = "Delete Item";
    deleteItem.className = "delete-item";
    deleteItem.addEventListener("click", () => removeFromCart(index));

    divInfoElement.appendChild(divPrinceContainer);
    divInfoElement.appendChild(deleteItem);
    divElement.appendChild(divInfoElement);
    cartElements.appendChild(divElement);
  });
}

// *************************************************************************************

function renderTotal() {
  totalElements.textContent = `Total: $${total}`;
}

// *************************************************************************************

function removeFromCart(index) {
  const { price, quantity } = arrayCart[index];
  total -= price * quantity;
  arrayCart.splice(index, 1);
  renderElementsCart();
  renderTotal();
}

// *************************************************************************************

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (cartElements.children.length == 0) {
    alert("No ha agregado ningún producto");
  } else if (cartElements.children.length >= 1) {
    alert("Gracias por su compra 😊");
  }
  location.reload();
});

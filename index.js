const reduce = document.getElementById("reduce-product");
const addCart = document.getElementById("add-product");
const numOfItems = document.getElementById("num-product");
const modal = document.getElementById("myModal");
const thumbs = document.querySelectorAll(".thumbs");
const imgViewer = document.querySelector("#img01");
const next = document.querySelector("#nxt");
const smallImg = document.querySelectorAll(".small-img-container");
const previous = document.querySelector("#prev");
const mainImg = document.querySelector("#myImg");
const shoppingCartButton = document.querySelector(".cart");
const closeCartButton = document.querySelector(".close1");
const cartPreview = document.querySelector(".cart-preview");
const deleteButton = document.getElementById("delete-cart");
const emptyMessage = document.querySelector(".body-preview");
const totalPrice = document.getElementById("total-price-in-cart");
const contentList = document.getElementById("content-list-");
const numberInCart = document.getElementById("number-of-items-in-cart");
const updateCartButton = document.querySelector(".add-to-cart-btn");
const checkoutButton = document.querySelector('.checkout')

let numberInCartInt = parseInt(numberInCart.innerHTML);
let numberOfItemsToAddInt = parseInt(numOfItems.innerHTML);
let totalPriceInt = parseInt(totalPrice.innerHTML);

addCart.addEventListener("click", () => {
  itemValue = numOfItems.innerText;
  itemValue++;
  numOfItems.innerText = itemValue;
});

reduce.addEventListener("click", () => {
  itemValue = Number(numOfItems.innerText);
  itemValue--;
  if (itemValue < 0) {
    return;
  }
  numOfItems.innerText = itemValue;
});

const img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

// // When the user clicks on <span> (x), close the modal
const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

// //Array of img Urls.

const images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    imgViewer.setAttribute("src", images[index]);
  });
});

let i = 0;

const images1 = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

function changeNext() {
  if (i < images1.length) {
    imgViewer.setAttribute("src", images1[i]);
    i++;
  } else {
    imgViewer.setAttribute("src", images1[0]);
    i = 0;
  }
}

function previousImg() {
  if (i > images1.length) {
    imgViewer.setAttribute("src", images1[i]);
    i--;
  } else {
    imgViewer.setAttribute("src", images1[0]);
    i = 0;
  }
}
previous.addEventListener("click", previousImg);
next.addEventListener("click", changeNext);

smallImg.forEach((image, index) => {
  image.addEventListener("click", () => {
    mainImg.setAttribute("src", images[index]);
  });
});

const deleteCart = () => {
  console.log("delete invoked");
  contentList.style.display = "none";
  checkoutButton.style.display = "none";
  emptyMessage.style.display = "block";
  numberInCart.innerHTML = 0;
  totalPrice.innerHTML = 0;
  numberInCartInt = 0;
  totalPriceInt = 0;
};

const openCartPreview = () => {
  cartPreview.style.display = "block";
};

const closeCartPreview = () => {
  cartPreview.style.display = "none";
};

const updateCart = () => {
  console.log("updateCart invoced");
  if (numberOfItemsToAddInt > 0) {
    numberInCartInt += numberOfItemsToAddInt;
    totalPriceInt = numberInCartInt * 125;

    emptyMessage.style.display = "none";
    contentList.style.display = "block";
    checkoutButton.style.display = "block";
    numberInCart.innerHTML = numberInCartInt;
    totalPrice.innerHTML = `$${totalPriceInt}.00`;

    openCartPreview();
  }

  // if checkout is beeing pressed, i could do another window saying "Payment is beeing processed... Thanks for trying... Check out all my other projects on .... ........!!"
};

const collect = (n) => {
  console.log(n);
  let current = parseInt(numberOfItemsToAdd.innerHTML);

  if (numberOfItemsToAddInt > 0 || (numberOfItemsToAddInt === 0) & (n === 1)) {
    numberOfItemsToAddInt += n;
    numOfItems.innerHTML = numberOfItemsToAddInt;
  }
};

deleteButton.addEventListener('click',deleteCart);
closeCartButton.addEventListener("click", closeCartPreview);
emptyMessage.addEventListener('click', closeCartPreview);
updateCartButton.addEventListener("click", updateCart);
//shoppingCartButton.addEventListener('mouseover', openCartPreview)
shoppingCartButton.addEventListener("click", openCartPreview);


// function addCart() {
//   productNumber.innerText = num.innerText;
//   productsNumber.innerText = num.innerText;
//   num.innerText = 0;
//   totalPrice.innerText = `$ ${125 * parseInt(productsNumber.innerText)}`;
//   if (productsNumber.innerText < 1) {
//     productNumber.style.display = "none";
//     content.style.display = "block";
//   } else {
//     let el = num.innerText;
//     content.style.display = "none";
//     content2.style.display = "block";
//     productNumber.style.display = "block";
//   }
// }

// if (productsNumber.innerText < 1) {
//   productNumber.style.display = "none";
//   content.style.display = "block";
//   console.log("add");
// }

// function deleteP() {
//   if (productsNumber.innerText < 1) {
//     productNumber.style.display = "none";
//     content.style.display = "block";
//     content2.style.display = "none";
//   } else {
//     productNumber.style.display = "block";
//   }
//   productsNumber.innerText = parseInt(productsNumber.innerText) - 1;
//   productNumber.innerText = productsNumber.innerText;
//   totalPrice.innerText = `$ ${125 * parseInt(productsNumber.innerText)}`;
// }

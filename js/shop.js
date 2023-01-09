// import { data } from "./data/product.js"
const data = [
    {
        id: "001",
        brand: "canadian brand",
        name: "pale pink jacket",
        image: "image/products/product1.jpg",
        price: "500",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias a doloremque alias, sed maxime voluptate accusamus animi aspernatur labore placeat temporibus eaque numquam assumenda reiciendis eveniet officia delectus aperiam repellat",
        subImageOne: "image/products/subimage1.jpg",
        subImageTwo: "image/products/subimage2.jpg"
    },
    {
        id: "002",
        brand: "canadian brand",
        name: "canadian brand",
        image: "image/products/product2.jpg",
        price: "500",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias a doloremque alias, sed maxime voluptate accusamus animi aspernatur labore placeat temporibus eaque numquam assumenda reiciendis eveniet officia delectus aperiam repellat",
        subImageOne: "image/products/subimage1.jpg",
        subImageTwo: "image/products/subimage2.jpg"
    },
    {
        id: "003",
        brand: "canadian brand",
        name: "canadian brand",
        image: "image/products/product3.jpg",
        price: "500",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias a doloremque alias, sed maxime voluptate accusamus animi aspernatur labore placeat temporibus eaque numquam assumenda reiciendis eveniet officia delectus aperiam repellat",
        subImageOne: "image/products/subimage1.jpg",
        subImageTwo: "image/products/subimage2.jpg"
    },
    {
        id: "004",
        brand: "canadian brand",
        name: "canadian brand",
        image: "image/products/product4.jpg",
        price: "500",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias a doloremque alias, sed maxime voluptate accusamus animi aspernatur labore placeat temporibus eaque numquam assumenda reiciendis eveniet officia delectus aperiam repellat",
        subImageOne: "image/products/subimage1.jpg",
        subImageTwo: "image/products/subimage2.jpg"
    },
    {
        id: "005",
        brand: "canadian brand",
        name: "canadian brand",
        image: "image/products/product5.jpg",
        price: "500",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias a doloremque alias, sed maxime voluptate accusamus animi aspernatur labore placeat temporibus eaque numquam assumenda reiciendis eveniet officia delectus aperiam repellat",
        subImageOne: "image/products/subimage1.jpg",
        subImageTwo: "image/products/subimage2.jpg"
    },
    {
        id: "006",
        brand: "canadian brand",
        name: "canadian brand",
        image: "image/products/product6.jpg",
        price: "500",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias a doloremque alias, sed maxime voluptate accusamus animi aspernatur labore placeat temporibus eaque numquam assumenda reiciendis eveniet officia delectus aperiam repellat",
        subImageOne: "image/products/subimage1.jpg",
        subImageTwo: "image/products/subimage2.jpg"
    }
];
// change color of heart icon
function addLike(id) {
    const heartId = document.querySelector(`#${id}`);
    if (getComputedStyle(heartId).color === "rgb(128, 128, 128)") {
        heartId.style.color = "#088178";
        heartId.style.backgroundColor = "#e8f6ea";
        sessionStorage.setItem(id, true);
    } else {
        heartId.style.color = "rgb(128, 128, 128)";
        heartId.style.backgroundColor = "rgb(243, 246, 244)";
        sessionStorage.removeItem(id);
    }
}

const shopContainer = document.querySelector('#shop-container');

const html = data.map(obj => {
    return `
  </div>
    <div class="product">
    <a id=${obj.id} href="product.html?id=${obj.id}">
    <img src=${obj.image} alt="feature cloth">
    <div class="description">
        <h5>${obj.brand}</h5>
        <h3>${obj.name}</h3>
        <h4><span>$</span>${obj.price}</h4>
    </div>
    </a>
    <i id=heart${obj.id} class="fa-solid fa-heart heart" onclick="addLike(this.id);"></i>
    </div>
    `;
}).join('');

shopContainer.insertAdjacentHTML('beforeend', html);
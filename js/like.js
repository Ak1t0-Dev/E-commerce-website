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

function createLikeTable(items) {
  const likeContainer = document.querySelector('#like');
  const like = items.map(item => {
    const obj = data.find((value) => value.id === item);
    return `
        <tr>
          <td><i class="fa-solid fa-circle-xmark"></i></td>
          <td>${obj.name}</td>
          <td><img src="${obj.image}"></td>
          <td><span>$</span>${obj.price}</td>
        </tr>
        `;
  }).join('');

  likeContainer.insertAdjacentHTML('beforeend', like);
}

function showLike() {
  const items = [];
  for (let i = 0; i < sessionStorage.length; i++) {
    const itemKey = sessionStorage.key(i);
    if (itemKey.match(/heart\d{3}/)) {
      items.push(itemKey.slice(5));
    }
  }

  if (items.length === 0) {
    return `
      <p>There's nothing in your cart.</p>
      `;
  }

  createLikeTable(items);

}
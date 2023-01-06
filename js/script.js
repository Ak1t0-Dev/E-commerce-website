const templateHeader = document.createElement('template');
const header = document.querySelector('#temp-header');
templateHeader.innerHTML = `
<div id="logo-header">
    <a href="index.html"><span>STONE.</span></i></i>
</div>
<div>
    <ul id="navbar">
        <li><a href="index.html"><i class="fa-solid fa-house"></i><span>Home</span></a></li>
        <li><a href="shop.html"><i class="fa-solid fa-shirt"></i><span>Shop</span></a></li>
        <li><a href="blog.html"><i class="fa-solid fa-heart"></i><span>Like</span></a></li>
        <li><a href="user.html"><i class="fa-solid fa-circle-user"></i><span>User</span></a></li>
        <li><a href="cart.html"><i class="fa-solid fa-cart-shopping"></i><span>Cart</span></a></li>
    </ul>
</div>
`;

header.appendChild(templateHeader.content);

// create footer
const templateFooter = document.createElement('template');
const footer = document.querySelector('#temp-footer');
templateFooter.innerHTML = `

<!-- <div id="logo-footer">
<a href="index.html"><span>STONE.</span></i></i>
</div> -->
<div id="content-footer">

<ul class="col">
    <h4>About</h4>
    <li><a href="#">About us</a></li>
    <li><a href="#">Delivery Information</a></li>
    <li><a href="#">Privacy Policy</a></li>
    <li><a href="#">Terms & Conditions</a></li>
    <li><a href="#">Contact us</a></li>
</ul>

<ul class="col">
    <h4>My Account</h4>
    <li><a href="#">Sign In</a></li>
    <li><a href="#">View Cart</a></li>
    <li><a href="#">My Wishlist</a></li>
    <li><a href="#">Track My Order</a></li>
    <li><a href="#">Help</a></li>
</ul>
</div>`;

footer.appendChild(templateFooter.content);

// add product information in session
function addCart(id) {
    const select = document.querySelector('[name="size"]');
    if (select.value === "") {
        // 処理記載
    } else {
        let sessionItem = sessionStorage.getItem(id);
        let count = 1;
        if (sessionItem === null) {
            // sessionStorage.setItem(id, count);
            createObj(id, select.value);
        } else {
            addObj(id, select.value);
            // count = parseInt(sessionItem);
            // count++;
            // sessionStorage.setItem(id, count);
        }
    }
}

function createObj(id, value) {
    const obj = {};
    obj[value] = 1;
    sessionStorage.setItem(id, JSON.stringify(obj));
}

function addObj(id, value) {
    let obj = sessionStorage.getItem(id);
    obj = JSON.parse(obj);
    if (obj.hasOwnProperty(value)) {
        obj[value]= parseInt(obj[value]) + 1; 
    } else {
        obj[value] = 1;
    }
    sessionStorage.setItem(id, JSON.stringify(obj));
}


// data
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
        description: "aaaaaaaaaaaaa",
        subImageOne: "image/products/subimage1.jpg",
        subImageTwo: "image/products/subimage2.jpg"
    },
    {
        id: "003",
        brand: "canadian brand",
        name: "canadian brand",
        image: "image/products/product3.jpg",
        price: "500",
        description: "aaaaaaaaaaaaa",
        subImageOne: "image/products/subimage1.jpg",
        subImageTwo: "image/products/subimage2.jpg"
    },
    {
        id: "004",
        brand: "canadian brand",
        name: "canadian brand",
        image: "image/products/product4.jpg",
        price: "500",
        description: "aaaaaaaaaaaaa",
        subImageOne: "image/products/subimage1.jpg",
        subImageTwo: "image/products/subimage2.jpg"
    },
    {
        id: "005",
        brand: "canadian brand",
        name: "canadian brand",
        image: "image/products/product5.jpg",
        price: "500",
        description: "aaaaaaaaaaaaa",
        subImageOne: "image/products/subimage1.jpg",
        subImageTwo: "image/products/subimage2.jpg"
    },
    {
        id: "006",
        brand: "canadian brand",
        name: "canadian brand",
        image: "image/products/product6.jpg",
        price: "500",
        description: "aaaaaaaaaaaaa",
        subImageOne: "image/products/subimage1.jpg",
        subImageTwo: "image/products/subimage2.jpg"
    }
];


const clothSize = [
    {
        xs: "XS",
        s: "S",
        m: "M",
        l: "L",
        xl: "XL",
        xxl: "XXL"
    }
]

// shop.html
const shopContainer = document.querySelector('#shop-container');

const html = data.map(obj => {
    return `
  </div>
    <div class="product">
    <a id=${obj.id} href="product.html?id=${obj.id}">
    <img src=${obj.image} alt="feature cloth">
    <div class="description">
        <span>${obj.brand}</span>
        <h5>${obj.name}</h5>
        <h4><span>$</span>${obj.price}</h4>
    </div>
    <i class="fa-solid fa-heart heart"></i></a>
    </div>
    `;
}).join('');

shopContainer.insertAdjacentHTML('beforeend', html);

// cart.html
function showCart() {
    const products = [];
    for (let i = 0; i < sessionStorage.length; i++) {
        const itemKey = sessionStorage.key(i);
        if (itemKey.match(/\d{3}/)) {
            const itemValue = JSON.parse(sessionStorage.getItem(itemKey));
            for(const [key, value] of Object.entries(itemValue)) {
                const item = [];
                item.push(itemKey, key, value);
                products.push(item);
            }
        }
    }

    if (products.length === 0) {
        return `
        <p>There's nothing in your cart.</p>
        `;
    }

    console.log(products);
    createTable(products);

}

function createTable(products) {
    const cartContainer = document.querySelector('#cart');
    const cart = products.map(product => {

        const obj = data.find((item) => item.id === product[0]);
        return `
        <tr>
          <td><i class="fa-solid fa-circle-xmark"></i></td>
          <td>${obj.brand}</td>
          <td>${obj.name}</td>
          <td>${obj.id}</td>
          <td>${product[1]}</td>
          <td><input type="number" value=${product[2]}></td>
          <td>total</td>
        </tr>
        `;

    }).join('');

    cartContainer.insertAdjacentHTML('beforeend', cart);
}

// product.html
function itemDetail() {
    const singleProduct = document.querySelector('#single-product');
    const searchParams = new URLSearchParams(location.search);
    const itemId = searchParams.get('id');
    const item = createProduct(itemId);
    singleProduct.insertAdjacentHTML('beforeend', item);

    // zoom
    const zoom = document.querySelectorAll(".zoom");
    const focusImage = document.querySelector("#focus-image");
    zoom.forEach((value) => {
        value.addEventListener("click", focusOn);
    });
    function focusOn() {
        focusImage.src = this.src;
    };
}

function createProduct(itemId) {
    const obj = data.find((item) => item.id === itemId);
    return `
        <div class="images">
        <div class="regular-image">
            <div class="product">
                <img id="focus-image" src=${obj.image} alt="feature cloth">
            </div>
        </div>
        <div class="small-image-group">
            <div class="small-image">
                <img class="zoom" src=${obj.image} alt="feature cloth">
            </div>
            <div class="small-image">
                <img class="zoom" src=${obj.subImageOne} alt="feature cloth">
            </div>
            <div class="small-image">
                <img class="zoom" src=${obj.subImageTwo} alt="feature cloth">
            </div>
        </div>
        </div>
        <div class="product-details">
        <h2>Men's Fashion Pale Pink Jacket</h2>
        <p>${obj.description}</p>
        <div class="price"><span>$</span>${obj.price}</div>
        <select name="size">
            <option value="">Select Size</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
        </select>
        <input type="button" id=${itemId} onclick="addCart(this.id);" value="Add To Cart">
        </div>
`
}





const clothSize = {
    xs: "XS",
    s: "S",
    m: "M",
    l: "L",
    xl: "XL",
    xxl: "XXL"
}

// ----------------------------------------------------------------------------------------------------------------------------------
// header
const templateHeader = document.createElement('template');
const header = document.querySelector('#temp-header');
templateHeader.innerHTML = `
<div id="logo-header">
    <a href="index.html"><span>STONE.</span></i></i>
</div>
<div>
    <ul id="navbar">
        <li><a href="index.html"><i class="fa-solid fa-house"></i></a></li>
        <li><a href="shop.html"><i class="fa-solid fa-shirt"></i></a></li>
        <li><a href="like.html"><i class="fa-solid fa-heart"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-circle-user"></i></a></li>
        <li><a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a></li>
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
    <h4>More</h4>
    <li><a href="#">Personalize Experience</a></li>
    <li><a href="#">Find a Sotre</a></li>
    <li><a href="#">Download the App</a></li>
    <li><a href="#">Sitmap</a></li>
    <li><a href="#">Mobile Marketing</a></li>
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

// ----------------------------------------------------------------------------------------------------------------------------------
// add product information in session
function addCart(id) {
    const select = document.querySelector('[name="size"]');
    if (select.value === "") {
        alert("please select size");
    } else {
        let sessionItem = sessionStorage.getItem(id);
        if (sessionItem === null) {
            createObj(id, select.value);
        } else {
            addObj(id, select.value);
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
        obj[value] = parseInt(obj[value]) + 1;
    } else {
        obj[value] = 1;
    }
    sessionStorage.setItem(id, JSON.stringify(obj));
}

// ----------------------------------------------------------------------------------------------------------------------------------
// index.html
const featuredContainer = document.querySelector('.featured-container');

const item = data.map(obj => {
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
    <i class="fa-solid fa-heart heart" onclick="changeColor();"></i>
    </div>
    `;
}).join('');

featuredContainer.insertAdjacentHTML('beforeend', item);

// ----------------------------------------------------------------------------------------------------------------------------------
// cart.html
function showCart() {
    const products = [];
    for (let i = 0; i < sessionStorage.length; i++) {
        const itemKey = sessionStorage.key(i);
        if (itemKey.match(/\d{3}/)) {
            const itemValue = JSON.parse(sessionStorage.getItem(itemKey));
            for (const [key, value] of Object.entries(itemValue)) {
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
          <td>${obj.name}</td>
          <td><img src="${obj.image}"></td>
          <td>${clothSize[product[1]]}</td>
          <td><span>$</span>${obj.price}</td>
          <td><input type="number" value=${product[2]}></td>
          <td><span>$</span>${calSubtotal(obj.price, product[2])}</td>
        </tr>
        `;

    }).join('');

    cartContainer.insertAdjacentHTML('beforeend', cart);
}

function calSubtotal(price, num) {
    const subtotal = parseInt(price) * parseInt(num);
    return subtotal;
}

// ----------------------------------------------------------------------------------------------------------------------------------
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
            <h5>${obj.brand}</h5>
            <h3>${obj.name}</h3>
        <div class="product-description">
            <p>${obj.description}</p>
        </div>
        <div class="price"><span>$</span>${obj.price}</div>
        <div class="select-decision">
        <select name="size" class="cloth-size">
            <option value="">Select Size</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
        </select>
        <input type="button" id=${itemId} class="add-cart" onclick="addCart(this.id);" value="Add To Cart">
        </div>
        </div>
`
}





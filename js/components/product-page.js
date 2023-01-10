import { data } from "../data/product.js"

// add product information in session
function addCart() {
    const select = document.querySelector('[name="size"]');
    if (select.value === "") {
        alert("please select size");
    } else {
        let sessionItem = sessionStorage.getItem(this.id);
        if (sessionItem === null) {
            createObj(this.id, select.value);
        } else {
            addObj(this.id, select.value);
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

    document.querySelectorAll('.add-cart').forEach(element => {
        element.addEventListener('click', addCart);
    })
}

window.addEventListener('load', itemDetail);

function createProduct(itemId) {
    const obj = data.find((item) => item.id === itemId);
    return `
        <div class="images">
        <div class="regular-image">
            <div class="regular">
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
        <input type="button" id=${itemId} class="add-cart" value="Add To Cart">
        </div>
        </div>
`
}
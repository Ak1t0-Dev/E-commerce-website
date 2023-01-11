import { data, clothSize } from "../data/product.js"

// ----------------------------------------------------------------------------------------------------------------------------------
// cart.html
// ----------------------------------------------------------------------------------------------------------------------------------

//  
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

    createTable(products);

    document.querySelectorAll('.x-mark').forEach(element => {
        element.addEventListener('click', deleteItem);
    })

}

window.addEventListener('load', showCart);

// create a table based on seesionStorage data
function createTable(products) {
    const cartContainer = document.querySelector('#cart');
    const cart = products.map(product => {

        const obj = data.find((item) => item.id === product[0]);
        return `
        <tr>
          <td><i id=${obj.id}${[product[1]]} class="fa-solid fa-circle-xmark x-mark"></i></td>
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

// remove item from sessionStorage and reload the page
function deleteItem() {
    const itemId = this.id.slice(0, 3);
    const itemSize = this.id.slice(3);
    const item = JSON.parse(sessionStorage.getItem(itemId));
    delete item[itemSize];
    if (Object.keys(item).length === 0) {
        sessionStorage.removeItem(itemId);
    } else {
        sessionStorage.setItem(itemId, JSON.stringify(item));
    }
    window.location.reload(false);
}

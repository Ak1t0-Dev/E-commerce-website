import { data, clothSize } from "../data/product.js"

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

    createTable(products);

}

window.addEventListener('load', showCart);

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

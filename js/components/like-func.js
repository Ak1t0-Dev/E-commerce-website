import { data } from "../data/product.js";

// when the page is loaded, make product blocks
window.addEventListener("load", () => {
    let container = "";
    if (document.getElementById('shop-container')) {
        container = "#shop-container";
    } else {
        container = "#featured-container";
    }

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
        <i id=heart${obj.id} class="fa-solid fa-heart heart"></i>
        </div>
        `;
    }).join('');

    document.querySelector(container).insertAdjacentHTML('beforeend', html);
    // implement click event to heart icon
    document.querySelectorAll('.heart').forEach(element => {
        element.addEventListener('click', addLike);
    })
    getSessionLike();
})

// change color of heart icon
function addLike() {
    const heartId = document.getElementById(this.id);

    if (getComputedStyle(heartId).color === "rgb(128, 128, 128)") {
        heartId.style.color = "#088178";
        heartId.style.backgroundColor = "#e8f6ea";
        sessionStorage.setItem(this.id, true);
    } else {
        heartId.style.color = "rgb(128, 128, 128)";
        heartId.style.backgroundColor = "rgb(243, 246, 244)";
        sessionStorage.removeItem(this.id);
    }
}


// get product id from session storage which user clicked like
// if there is an id change the coler of icon
function getSessionLike() {
    for (let i = 0; i < sessionStorage.length; i++) {
        const itemKey = sessionStorage.key(i);
        if (itemKey.match(/heart\d{3}/)) {
            const heartId = document.getElementById(itemKey);
            heartId.style.color = "#088178";
            heartId.style.backgroundColor = "#e8f6ea";
        }
    }
}
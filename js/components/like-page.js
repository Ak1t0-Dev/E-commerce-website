import { data } from "../data/product.js"

// get "like information" from session storage
function showLike() {
  const items = [];
  for (let i = 0; i < sessionStorage.length; i++) {
    const itemKey = sessionStorage.key(i);
    if (itemKey.match(/heart\d{3}/)) {
      items.push(itemKey.slice(5));
    }
  }

  if (items.length < 0) {
    return `
      <p>There's nothing in your cart.</p>
      `;
  }

  createLikeTable(items);

}

window.addEventListener('load', showLike);

// make table rows
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
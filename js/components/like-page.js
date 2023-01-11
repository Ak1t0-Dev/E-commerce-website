import { data } from "../data/product.js"

// ----------------------------------------------------------------------------------------------------------------------------------
// like.html
// ----------------------------------------------------------------------------------------------------------------------------------

// when page is reload, the function is called
// get "product like" from session storage
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

  document.querySelectorAll('.x-mark').forEach(element => {
    element.addEventListener('click', deleteItem);
})

}

window.addEventListener('load', showLike);

// make table rows
function createLikeTable(items) {
  const likeContainer = document.querySelector('#like');
  const like = items.map(item => {
    const obj = data.find((value) => value.id === item);
    return `
        <tr>
          <td><i id=heart${obj.id} class="fa-solid fa-circle-xmark x-mark"></i></td>
          <td>${obj.name}</td>
          <td><img src="${obj.image}"></td>
          <td><span>$</span>${obj.price}</td>
        </tr>
        `;
  }).join('');

  likeContainer.insertAdjacentHTML('beforeend', like);
}

// delete item from sessionStorage and reload the page
function deleteItem() {
  sessionStorage.removeItem(this.id);
  window.location.reload(false);
}

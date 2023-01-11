// ----------------------------------------------------------------------------------------------------------------------------------
// create header
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
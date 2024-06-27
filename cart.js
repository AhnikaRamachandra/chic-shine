
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productPrice, productImage) {
    cart.push({ name: productName, price: productPrice, image: productImage });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Item added to cart!"); 
}


function displayCart() {
    const cartDiv = document.getElementById('cart');
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Your cart is empty.</p>';
        cartDiv.style.textAlign="centre";
    } else {
        let cartHTML = '<ul>';
        cart.forEach(item => {
            cartHTML += `<li>
                            <img src="${item.image}" alt="${item.name}" width="50">
                            ${item.name} - $${item.price.toFixed(2)}
                         </li>`;
        });
        cartHTML += '</ul>';
        cartHTML += `<p>Total: $${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>`;
        cartDiv.innerHTML = cartHTML;
    }
}


if (window.location.pathname.includes('cart.html')) {
    displayCart();
}

function checkCartBeforeCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to the cart before checking out.");
        return false; 
    }
    return true; 
}

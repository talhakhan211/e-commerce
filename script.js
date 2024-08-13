let cart = [];
let cartCount = 0;
let cartTotal = 0;

function addToCart(id, name, price) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCountElement = document.getElementById('cart-count');
    const cartTotalElement = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    cartTotal = 0;
    cartCount = 0;

    cart.forEach(item => {
        cartCount += item.quantity;
        cartTotal += item.price * item.quantity;
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
        cartItems.appendChild(listItem);
    });

    cartCountElement.textContent = cartCount;
    cartTotalElement.textContent = cartTotal.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
}

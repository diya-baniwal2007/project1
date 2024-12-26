// Shopping Cart Functionality
let cart = [];

function addToCart(productName) {
    cart.push(productName);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item}`;
        cartItems.appendChild(li);
    });
}

// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us. We will get back to you soon!');
});

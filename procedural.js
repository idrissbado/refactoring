// Procedural Shopping Cart

// Global variables to store cart data
let cart = [];

// Function to add an item to the cart
function addItem(name, quantity, price) {
    cart.push({ name, quantity, price });
    console.log(`${name} (x${quantity}) added to cart.`);
}

// Function to view all items in the cart
function viewCart() {
    if (cart.length === 0) {
        console.log("Your cart is empty.");
        return;
    }

    let total = 0;
    console.log("Cart Items:");
    cart.forEach((item) => {
        const itemTotal = item.quantity * item.price;
        console.log(`${item.name} (x${item.quantity}) - ${itemTotal.toFixed(2)} TND`);
        total += itemTotal;
    });
    console.log(`Total: ${total.toFixed(2)} TND`);
}

// Function to remove an item from the cart by name
function removeItem(name) {
    const index = cart.findIndex((item) => item.name === name);
    if (index !== -1) {
        const removedItem = cart.splice(index, 1)[0];
        console.log(`${removedItem.name} removed from cart.`);
    } else {
        console.log(`${name} not found in cart.`);
    }
}

// Function to clear all items from the cart
function clearCart() {
    cart = [];
    console.log("Cart cleared.");
}

// Example Usage
addItem("Apple", 2, 1.5);
addItem("Orange", 3, 2.0);
viewCart(); // Output: Apple (x2) - 3.00 TND, Orange (x3) - 6.00 TND, Total: 9.00 TND
removeItem("Apple");
viewCart(); // Output: Orange (x3) - 6.00 TND, Total: 6.00 TND
clearCart();
viewCart(); // Output: Your cart is empty.
// Shopping Cart Module Pattern

const ShoppingCart = (() => {
    // Private variable to store cart data
    let cart = [];

    // Public methods
    return {
        // Add an item to the cart
        addItem(name, quantity, price) {
            cart.push({ name, quantity, price });
            console.log(`${name} (x${quantity}) added to cart.`);
        },

        // View all items in the cart
        viewCart() {
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
        },

        // Remove an item from the cart by name
        removeItem(name) {
            const index = cart.findIndex((item) => item.name === name);
            if (index !== -1) {
                const removedItem = cart.splice(index, 1)[0];
                console.log(`${removedItem.name} removed from cart.`);
            } else {
                console.log(`${name} not found in cart.`);
            }
        },

        // Clear all items from the cart
        clearCart() {
            cart = [];
            console.log("Cart cleared.");
        },
    };
})();

// Example Usage
ShoppingCart.addItem("Apple", 2, 1.5);
ShoppingCart.addItem("Orange", 3, 2.0);
ShoppingCart.viewCart(); // Output: Apple (x2) - 3.00 TND, Orange (x3) - 6.00 TND, Total: 9.00 TND
ShoppingCart.removeItem("Apple");
ShoppingCart.viewCart(); // Output: Orange (x3) - 6.00 TND, Total: 6.00 TND
ShoppingCart.clearCart();
ShoppingCart.viewCart(); // Output: Your cart is empty.
# Shopping Cart System in JavaScript

This project demonstrates the implementation of a simple shopping cart system in JavaScript, first using **procedural programming** and then refactored using the **Module Pattern**. The goal is to explore how design patterns improve code maintainability, scalability, and organization.

---

## **Project Structure**

### **Procedural Programming**
- **Global Variables**: Used to store cart data.
- **Functions**: Implemented to manage cart operations (e.g., `addItem`, `viewCart`, `removeItem`, `clearCart`).

### **Refactored Code (Module Pattern)**
- **Encapsulation**: Cart data and functions are encapsulated within a module.
- **Public API**: Only the necessary methods are exposed, keeping the internal state private.

---

## **Reflection Report**

### **Challenges Faced During Refactor**
1. **Encapsulation**:
    - Moving from global variables to a module required encapsulating the cart data and functions, which initially felt restrictive.
2. **Scope Management**:
    - Ensuring all cart operations were accessible through the module while keeping the cart data private was challenging.
3. **Code Structure**:
    - Restructuring the code to fit the module pattern required careful planning to avoid breaking existing functionality.

### **How Using a Design Pattern Improved the Code**
1. **Encapsulation**:
    - The Module Pattern encapsulates the cart data and functions, preventing global scope pollution and improving code organization.
2. **Reusability**:
    - The module can be easily reused in other parts of the application or in different projects.
3. **Maintainability**:
    - The code is more modular and easier to maintain, as all cart-related logic is contained within a single module.

### **When to Choose a Design Pattern Over Procedural Code**
- **Complex Applications**:
    - Design patterns are ideal for larger, more complex applications where modularity and scalability are important.
- **Team Collaboration**:
    - When working in a team, design patterns provide a clear structure, making it easier for multiple developers to collaborate.
- **Code Reusability**:
    - If the code needs to be reused across multiple projects or components, design patterns like the Module Pattern are beneficial.

---

## **Deliverables**

1. **Procedural Code**:
    - [Link to procedural code](https://github.com/idrissbado/refactoring/blob/main/procedural.js)
2. **Refactored Code**:
    - [Link to refactored code](https://github.com/idrissbado/refactoring/blob/main/designrefactor.js)
3. **Reflection Report**:
    - Included above.

---

## **Procedural Code**

```javascript
// Procedural Shopping Cart

let cart = [];

function addItem(name, quantity, price) {
  cart.push({ name, quantity, price });
  console.log(`${name} (x${quantity}) added to cart.`);
}

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

function removeItem(name) {
  const index = cart.findIndex((item) => item.name === name);
  if (index !== -1) {
    const removedItem = cart.splice(index, 1)[0];
    console.log(`${removedItem.name} removed from cart.`);
  } else {
    console.log(`${name} not found in cart.`);
  }
}

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
// Shopping Cart Module Pattern

const ShoppingCart = (() => {
  let cart = [];

  return {
    addItem(name, quantity, price) {
      cart.push({ name, quantity, price });
      console.log(`${name} (x${quantity}) added to cart.`);
    },

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

    removeItem(name) {
      const index = cart.findIndex((item) => item.name === name);
      if (index !== -1) {
        const removedItem = cart.splice(index, 1)[0];
        console.log(`${removedItem.name} removed from cart.`);
      } else {
        console.log(`${name} not found in cart.`);
      }
    },

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

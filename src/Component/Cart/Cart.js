import React from "react";
import "./Cart.css";

const Cart = (props) => {
console.log(props)
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of props.cart) {
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    quantity = quantity + product.quantity;
    //details.. https://www.w3schools.com/js/js_loop_forof.asp
  }

  const tax = (num) => {
    let totalTax = parseInt((num * 0.1).toFixed());
    return totalTax
  };

 

  return (
    <div className="Cart">
      <h5>Product Summery</h5>
      <p>total product: {quantity} </p>
      <p>Total Price: {total} </p>
      <p>Shipping cost: {shipping} </p>
      <p>Tax (10%): {tax(total)} </p>
      <h6>Grand Total: {total + shipping + tax(total)} </h6>
        {props.children}
    </div>
  );
};

export default Cart;

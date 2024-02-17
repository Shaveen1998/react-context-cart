import React from 'react'
import SingleProduct from './SingleProduct'
import "../public/styles.css";
import { CartState } from '../context/cartContext';

function Cart() {
    const { cart } = CartState();

    console.log(cart)
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total:</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
}

export default Cart

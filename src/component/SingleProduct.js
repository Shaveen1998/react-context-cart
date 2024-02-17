import React, { useContext } from 'react'
import "../public/styles.css";
import { CartState } from '../context/cartContext';
import { Cart } from '../context/cartContext';

function SingleProduct({prod}) {

    const { cart, setCart } = useContext(Cart);

  return (
    <div>
       <div className="products">
      <img src={prod.images[0]} alt={prod.title} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.title}</span>
        <span>₹ {prod.price}</span>
        
        {cart.includes(prod)}(
                    <button
                        className="add remove"
                        onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
                        >
                                    Remove from Cart
                    </button>
                :(
                    <button className="add" onClick={() => setCart([...cart, prod])}>
                        Add to Cart
                    </button>
            )
        )
        
      </div>
    </div>
    </div>
  )
}

export default SingleProduct

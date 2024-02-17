import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import "../public/styles.css";
import { CartState } from '../context/cartContext';

function Home() {

    const { products, setProducts } = CartState();

    useEffect(()=>{
        const fetchProducts = async ()=>{
            const response = await fetch('https://dummyjson.com/products');
                const json = await response.json();
                console.log(json); // Log the response to see its structure
                setProducts(json.products);
                console.log(products)
        }
    
        fetchProducts()
      
    },[])

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>Products Page</span>
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
}

export default Home

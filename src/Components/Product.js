import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
// import {Button,ButtonGroup} from '@chakra-ui/react'
// import { MyContext } from './Context/Context';
import { useProduct } from './Context/Context';
function Product() {
    const {add} = useProduct()
    const [products, setProducts] = useState([]);

    useEffect(() => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }, []);
    // console.log(products)
  return (
    <div
    style={{
      margin: "10px",
      padding: "10px",
      marginTop: "50px",
      border: "1px solid black",
      display: "grid",
      gridTemplateColumns: "auto auto auto",
      gridGap: "50px",
    }}
  >
    {products.map((product) => {
      return (
        <div style={{ padding: "10px" ,marginLeft:"70px"}} key={product.id}>
          <img
            width="150px"
            height="150px"
            src={product.image}
            alt="product"
          />
          <h3>{product.title}</h3>
          <p>Category : {product.category}</p>
          <p style={{ color: "blue" }}>$ {product.price}</p>
          <button 
             onClick={() => add(product)}
            style={{
              backgroundColor: "Teal",
              width: "100px",
              height: "30px",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Add to cart
          </button>
         
          
        </div>
      );
    })}
  </div>
  )
}

export default Product
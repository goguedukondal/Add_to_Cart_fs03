import React from 'react'
// import { MyContext } from './Context/Context';
import { useProduct } from './Context/Context';
function Addtocart() {
    const {cartProducts,remove} = useProduct()
    console.log(cartProducts)
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
    {cartProducts.map((product) => {
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
             onClick={() => remove(product.id)}
            style={{
              backgroundColor: "red",
              width: "200px",
              height: "30px",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Remove From  cart
          </button>
         
          
        </div>
      );
    })}
  </div>
  )
}

export default Addtocart
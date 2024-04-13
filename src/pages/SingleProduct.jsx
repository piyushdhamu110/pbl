import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



function SingleProduct() {
          const {productId} = useParams();
          const [product, setProduct] = useState({});
          const getProducts = async () => {
                    try {
                              const response= await axios.get(`http://localhost:3000/products/${productId}`);
                              const data = response.data;
                              console.log(data)
                              setProduct(data)
                    } catch (error) {
                              console.log(error.message)
                    }
          }
          // getProducts();
          useEffect(() => {getProducts()},[])
                     
  return (
    <div>
          <h1>{product.name}</h1>
          <img src={product.image} alt="" />
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.category}</p>
          <p>{product.type}</p>
    </div>
  )
}

export default SingleProduct;
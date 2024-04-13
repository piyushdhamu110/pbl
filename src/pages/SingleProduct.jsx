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
          <>
          <div className="w-[99vw] h-[10vh]"></div>
          <div></div>
          </>
  )
}

export default SingleProduct;
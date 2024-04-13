// GetProductsByLocation.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetProductsByLocation = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const userId = localStorage.getItem('userID');

    const fetchProductsByLocation = async () => {
      try {
        // Fetch the buyer's location
        const locationResponse = await axios.get(`http://localhost:3000/getUserLocation/${userId}`);
        const userLocation = locationResponse.data.userLocation;
console.log(userLocation);
        // Fetch products with the same location
        const productsResponse = await axios.get(`http://localhost:3000/productsByLocation/${userLocation}`);
        setProducts(productsResponse.data);
      } catch (error) {
        console.error('Error fetching products by location:', error);
      }
    };
    fetchProductsByLocation();
  }, []);

  return (
    <div className="container get-products-by-location text-slate-950">
      <h2>Products in Proximity</h2>
      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product._id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">Price: ${product.price}</p>
            <p className="category">Category: {product.category}</p>
            <p className="type">Type: {product.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetProductsByLocation;

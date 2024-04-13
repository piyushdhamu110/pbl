import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import GetProductsByLocation from "./GetProductsByLocation"; // Import the GetProductsByLocation component

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      console.log(response.data.slice(0, 5));
      setProducts(response.data.slice(0, 9));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="w-full h-[10vh]"></div>
      <div className="w-full flex flex-col items-center p-3 gap-2">
        <div className="w-full h-[50vh] bg-white">
          <Carousel />
        </div>
        <div className="w-full pt-4 flex flex-col items-center gap-3 rounded-md">
          <div className="w-full">
            <h1 className="text-black text-3xl">Trending Products</h1>
          </div>
          <div className="w-full p-3 flex flex-wrap gap-4 justify-center">
            {products.map((item) => {
              return (
                <div
                  className="w-72 p-2 bg-white rounded-xl hover:shadow-xl hover:scale-[1] cursor-pointer"
                  key={item._id}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-36 object-cover rounded-t-xl"
                  />
                  <div className="p-3">
                    <p className="text-lg">{item.name.slice(0, 25)}</p>
                    <div>
                      <p className="text-base">
                        Price: Rs.{" "}
                        <span className="font-semibold">{item.price}</span>
                      </p>
                      <p className="text-base">
                        Category:{" "}
                        <span className="font-semibold">{item.category}</span>
                      </p>
                      <p className="text-base">
                        Type: <span className="font-semibold">{item.type}</span>
                      </p>
                      <Link
                        to={`${item._id}`}
                        className="text-blue-600 hover:underline"
                      >
                        Read More..
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Display GetProductsByLocation component */}
      
      </div>
    </>
  );
};

export default Home;

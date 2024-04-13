import React, {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {

          const [products, setProducts] = useState([]);
          
          const getProducts = async () => {
                    try {
                              const response= await axios.get("http://localhost:3000/products")
                              console.log(response.data.slice(0,5))
                              setProducts(response.data.slice(0,5))
                    } catch (error) {
                              console.log(error.message)
                    }
          }

          useEffect(() => {getProducts()},[])

  return (
    <>
      <div className="w-[95vw] h-[10vh]"></div>
      <div className="w-[99vw] flex flex-col items-center p-3 gap-2">
        <div className="w-[100%] h-[50vh] bg-gray-100"></div>
        <div className="w-[100%] pt-4 flex flex-col items-center gap-3 bg-gray-200 rounded-md">
                    <div className="w-[90%]">
                    <h1 className="text-black text-[30px]">Treading Products</h1>
                    </div>
                    <div className="w-[90%] p-3 flex gap-4 ">
                              {products.map((item) =>{
                                        return(
                                                  <div className="w-[25%] p-2 bg-white rounded-xl">
                                                            <img src={item.image} alt="" className="w-[25rem] h-[13rem]"/>
                                                            <div className="w-[100%] px-3">
                                                            <p className="text-[20px] font-semibold">{item.name.slice(0,25)}</p>
                                                            <p className="text-[18px]">Rs. <span className="font-semibold">{item.price}</span></p>
                                                            </div>
                                                  </div>
                                        )
                              })}
                    </div>
                    
        </div>
      </div>
    </>
  );
};

export default Home;

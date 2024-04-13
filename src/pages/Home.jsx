import React, {useEffect, useState} from "react";
import axios from "axios";
import img from '../assets/SideImage.png'
import { Link } from "react-router-dom";


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
      <div className="w-[99vw] h-[10vh]"></div>
      <div className="w-[99vw] flex flex-col items-center p-3 gap-2">
       <div className="w-[100%] h-[50vh] bg-white"></div>
        <div className="w-[100%] pt-4 flex flex-col items-center gap-3  rounded-md">
                    <div className="w-[90%]">
                    <h1 className="text-black text-[30px]">Treading Products</h1>
                    </div>
                    <div className="w-[100%] p-3 flex flex-wrap gap-4  justify-center">
                              {products.map((item) =>{
                                        return(
                                                  <div className="w-[16rem] p-2 bg-white rounded-xl hover:shadow-xl hover:scale-[1] cursor-pointer">
                                                            <img src={item.image} alt="" className="w-[25rem] h-[13rem]"/>
                                                            <div className="w-[100%] px-3">
                                                            <p className="text-[20px]">{item.name.slice(0,25)}</p>
                                                            <div>
                                                            <p className="text-[15px]">Price: Rs. <span className="font-semibold">{item.price}</span></p>
                                                            <p className="text-[15px]">category: <span className="font-semibold">{item.category}</span></p>
                                                            <p className="text-[15px]">Type: <span className="font-semibold">{item.type}</span></p>
                                                            <Link to={`${item._id}`}>Read More..</Link>
                                                            </div>

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

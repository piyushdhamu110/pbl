import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoMdStar } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";
import { SiContactlesspayment } from "react-icons/si";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbBrandTopbuzz } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const getProducts = async () => {
    try {
      const response = await axios.get(
        `https://lcm-backend.onrender.com/products/${productId}`
      );
      const data = response.data;
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  // getProducts();
  useEffect(() => {
    getProducts();
  }, []);

  const itemName = product.name;
  const itemPrice = product.price;
  const [quantity, setQuantity] = useState(1);
  const [finalAmount, setFinalAmount] = useState(itemPrice * quantity);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setFinalAmount(finalAmount - itemPrice);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
    setFinalAmount(finalAmount + itemPrice);
  };

  const checkout = async () => {
    try {
      const res = await fetch("https://lcm-backend.onrender.com/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          items: [
            {
              id: 1,
              quantity: quantity,
              price: itemPrice,
              name: itemName,
            },
          ],
        }),
      });
      const data = await res.json();
      window.location = data.url;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-[99vw] flex flex-col items-center">
        <div className="w-[99vw] h-[14vh]"></div>
        <div className="w-[98vw] flex gap-3 p-3 bg-white rounded-2xl">
          <img src={product.image} alt="" className=" p-3 w-[38%] h-[40rem]" />
          <div className="w-[38%] flex flex-col p-3 gap-2 ">
            <div className="flex flex-col gap-1">
              <h1 className="text-[30px]">{product.name}</h1>
              <p className="flex items-center text-[15px]">
                5 <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />{" "}
                <span className="text-blue-400">
                  66 rating | Search this page
                </span>
              </p>
              <p className="text-[15px]">1000+ product buy last month</p>
            </div>
            <hr className="border-black" />
            <div className="flex flex-col gap-1">
              <p className="text-[25px]">
                {" "}
                <span className="text-red-400">-70%</span> Rs{product.price}
              </p>
              <p className="text-[14px] text-gray-500">
                M.R.P Rs <span className="line-through">1999</span>
              </p>
              <p className="text-[14px]">Inclusive all taxes</p>
            </div>
            <hr className="border-black" />
            <div className="pt-2">
              <p className="flex items-center gap-2 text-[20px]">
                <BiSolidOffer className="text-[20px]" /> Offer
              </p>
              <div className="flex gap-1">
                <div className="p-3 shadow-lg">
                  <p className="font-semibold">Bank Offer</p>
                  <p className="text-[15px]">
                    10% off on ICICI Bank Credit Card
                  </p>
                  <p className="text-blue-400">1 Offer</p>
                </div>
                <div className="p-3 shadow-lg">
                  <p className="font-semibold">Bank Offer</p>
                  <p className="text-[15px]">
                    10% off on ICICI Bank Credit Card
                  </p>
                  <p className="text-blue-400">1 Offer</p>
                </div>
                <div className="p-3 shadow-lg">
                  <p className="font-semibold">Bank Offer</p>
                  <p className="text-[15px]">
                    10% off on ICICI Bank Credit Card
                  </p>
                  <p className="text-blue-400">1 Offer</p>
                </div>
              </div>
            </div>
            <hr className="border-black" />
            <div className="p-3 flex justify-center gap-10">
              <div className="p-1 flex flex-col gap-1">
                <GiReturnArrow className="text-[20px]" />
                <p className="text-[14px]">10 Days return policy</p>
              </div>
              <div className="p-1">
                <SiContactlesspayment className="text-[20px]" />
                <p className="text-[14px]">Pay on Delivery</p>
              </div>
              <div className="p-1">
                <CiDeliveryTruck className="text-[20px]" />
                <p className="text-[14px]">Free Delivery</p>
              </div>
              <div className="p-1">
                <TbBrandTopbuzz className="text-[20px]" />
                <p className="text-[14px]">Top brand</p>
              </div>
            </div>
          </div>
          <div className="w-[24%] p-1">
            <div className="p-4 border border-black rounded-md flex flex-col gap-3">
              <p className="text-[20px]">Rs{product.price}</p>
              <p>
                <span className="text-blue-400">Free Delivery</span>{" "}
                <span className="font-semibold">Tuesday 16 April</span>
              </p>
              <p>
                Order within{" "}
                <span className="text-green-500">21hrs 27min.</span>
              </p>
              <p className="text-blue-400">Details</p>
              <p className="flex gap-2 items-center">
                <FaLocationDot />{" "}
                <span className="text-blue-400">
                  Deliver to AIT, Pune 411553
                </span>
              </p>
              <p className="text-[20px] text-green-600 pt-4">In Stock</p>
              <p>ships from Amazon</p>
              <p>Sold by Someone</p>
              <div className="flex gap-3">
                <p>Quantity</p>
                <div className="flex gap-2">
                  <button onClick={decrement}>-</button>
                  <p>{quantity}</p>
                  <button onClick={increment}>+</button>
                </div>
              </div>
              <button className="p-3 bg-black text-white rounded-3xl">
                Add to Cart
              </button>
              <button
                className="p-3 bg-black text-white rounded-3xl"
                onClick={checkout}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;

import React from "react";
import img from "../../assets/SideImage.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="w-screen flex flex-col items-center">
        <div className="w-screen h-[14vh]"></div>
        <div className="w-[90%] flex justify-between p-4 bg-white rounded-2xl lg:justify-center">
          <img src={img} alt="" className="w-[40rem] lg:hidden" />
          <div className="w-[50%] flex flex-col justify-center items-center gap-10 lg:w-[100%]">
            <div className=" flex flex-col gap-4 items-center">
              <p className="text-black text-[30px]">
                You want to <span className="font-bold">Buy</span> Something{" "}
                <span className="text-red-400">Click Here</span>
              </p>
              <button className="bg-black w-[50%] p-3 rounded-3xl hover:bg-slate-700">
                <Link to="/signup/buyer" className="text-white">
                  Sign Up as Buyer
                </Link>
              </button>
            </div>

            <div className=" flex flex-col gap-4 items-center">
              <p className="text-black text-[30px]">
                You want to <span className="font-bold">Sell</span> Something{" "}
                <span className="text-red-400">Click Here</span>
              </p>
              <button className="bg-black w-[50%] p-3 rounded-3xl hover:bg-slate-700">
                <Link
                  to="/signup/seller"
                  className="text-white hover:text-black"
                >
                  Sign Up as Seller
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

import React, { useState } from "react";
import img from "../../assets/SideImage.png";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const SellerSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <div className="w-screen flex flex-col items-center">
        <div className="w-screen h-[14vh]"></div>
        <div className="w-[80vw] flex justify-between p-3 bg-white rounded-2xl">
          <img src={img} alt="" className="w-[40rem]" />
          <div className="auth w-[50%] flex justify-center items-center">
            {isLogin ? (
              <Login isLogin={isLogin} setIsLogin={setIsLogin} />
            ) : (
              <Register isLogin={isLogin} setIsLogin={setIsLogin} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const Login = ({ isLogin, setIsLogin }) => {
  const [_, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:3000/loginseller", {
        username,
        password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      window.localStorage.setItem("userType", result.data.userType);

      navigate("/seller/create-product");

      console.log(result.data.token);
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth-container w-[100%] flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 w-[100%] items-center"
      >
        <h2 className="text-black text-center text-[2rem]">
          Login as a Seller
        </h2>
        <div className="form-group flex gap-2 justify-center w-[100%]">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="border-b border-black p-1 w-[50%] text-black focus:outline-none focus:text-[20px]"
            placeholder="Username"
          />
        </div>
        <div className="form-group flex justify-center gap-2 w-[100%]">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border-b border-black p-1 w-[50%] text-black focus:outline-none focus:text-[20px]"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="bg-black w-[50%] p-3 rounded-3xl hover:bg-slate-700 text-white"
        >
          Login
        </button>
        <p className="text-black">
          Create an Account{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

const Register = ({ isLogin, setIsLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3000/signupseller", {
        username,
        password,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth-container w-[100%] flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 w-[100%] items-center"
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-black text-center text-[2rem]">
            Create an Account
          </h2>
          <p className="text-black">Enter your details here</p>
        </div>
        <div className="form-group flex gap-2 justify-center w-[100%]">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="border-b border-black p-1 w-[50%] text-black focus:outline-none focus:text-[20px]"
            placeholder="Username"
          />
        </div>
        <div className="form-group flex gap-2 justify-center w-[100%]">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border-b border-black p-1 w-[50%] text-black focus:outline-none focus:text-[20px]"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="bg-black w-[50%] p-3 rounded-3xl hover:bg-slate-700 text-white"
        >
          Register
        </button>
        {!isLogin && (
          <p className="text-black">
            Already have account?{" "}
            <span
              className="text-blue-400 cursor-pointer"
              onClick={() => {
                setIsLogin(!isLogin);
              }}
            >
              LogIn
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default SellerSignUp;

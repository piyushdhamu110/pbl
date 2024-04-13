import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [userType, setUserType] = useState("");

  useEffect(() => {
    // Check user type on component mount
    const userType = localStorage.getItem("userType");
    setUserType(userType);
  }, []);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (userType === "seller") {
        // Upload image to Cloudinary
        const formData = new FormData();
        formData.append("image", image);
        formData.append("upload_preset", "ak775vwv");
        const imageUploadResponse = await axios.post(
          "http://localhost:3000/upload",
          formData
        );

        // Create product with image URL
        const newProduct = {
          name,
          description,
          image: imageUploadResponse.data.url,
          price,
          category,
          type,
        };

        console.log(newProduct);
        // Post new product to backend
        await axios.post("http://localhost:3000/products", newProduct);

        // Clear form fields
        setName("");
        setDescription("");
        setImage(null);
        setPrice("");
        setCategory("");
        setType("");

        alert("Product created successfully");
      } else {
        alert("Only sellers can create products.");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Failed to create product");
    }
  };
  return (
    <>
      <div className="w-screen h-[10vh]"></div>
      <div className="w-screen flex flex-col items-center pt-10">
        <h2 className="text-[30px] font-bold pb-5">Create New Product</h2>
        <div className="w-[100%] flex justify-center">
        <form onSubmit={handleSubmit} className="w-[50%] flex flex-col gap-4">
          <label className="text-[20px]">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border-2 border-gray-300 bg-gray-300 p-3 focus:outline-none"
            placeholder="Product Name"
          />
          <label className="text-[20px]">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="border-2 border-gray-300 bg-gray-300 p-3 focus:outline-none"
          />
          <label className="text-[20px]">Image:</label>
          <input type="file" onChange={handleImageChange} required className=""/>
          <label className="text-[20px]">Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="border-2 border-gray-300 bg-gray-300 p-3 focus:outline-none"
          />
          <label className="text-[20px]">Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="border-2 border-gray-300 bg-gray-300 p-3 focus:outline-none"
          />
          <label className="text-[20px]">Type:</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="border-2 border-gray-300 bg-gray-300 p-3 focus:outline-none"
          />
          <button type="submit" className="p-3 bg-blue-400 rounded-2xl w-[50%]">Submit</button>
        </form>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;

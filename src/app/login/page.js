"use client";

import { useState } from "react";
import CustomComponents from "@/components/CustomComponents";

const page = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="shadow-[0_0_10px_5px] shadow-zinc-300 rounded-lg flex flex-col justify-center w-[400px] h-[300px] p-12 gap-4">
        <h1 className="text-3xl text-center">Login</h1>
        <CustomComponents.Input
          inputName="email"
          inputValue={formData?.email}
          handleInputChange={handleInputChange}
          placeholder="Enter your email"
        />

        <CustomComponents.Input
          inputName="password"
          inputValue={formData?.password}
          handleInputChange={handleInputChange}
          placeholder="Enter your password"
        />

        <button className="bg-blue-500 text-white py-2 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default page;

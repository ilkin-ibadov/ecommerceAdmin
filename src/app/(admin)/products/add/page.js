"use client";

import ProductForm from "@/components/ProductForm";
import { fetchData } from "@/utils/fetchData";
import { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({});

  const addNewProduct = async () => {
    const result = await fetchData({
      url: "http://localhost:5000/products/add/",
      tokenRequired: true,
      method: "POST",
      body: product,
    });

    alert(
      result.success
        ? "Successfully added product"
        : "Error occurred while adding the product"
    );
  };

  const handleInputChange = (name, value) => {
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <ProductForm product={product} handleInputChange={handleInputChange} />
  );
};

export default AddProduct;

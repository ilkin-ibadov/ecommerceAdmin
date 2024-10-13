"use client";

import ProductForm from "@/components/ProductForm";

import { useEffect, useState } from "react";

const EditProduct = ({ searchParams }) => {
  const [product, setProduct] = useState({});

  const handleInputChange = (name, value) => {
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const getProductData = async () => {
    const productId = searchParams?.productId;
    const response = await fetch(
      `http://localhost:5000/products/product/${productId}`
    );
    const product = await response.json();

    setProduct(product);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <ProductForm product={product} handleInputChange={handleInputChange} />
  );
};

export default EditProduct;

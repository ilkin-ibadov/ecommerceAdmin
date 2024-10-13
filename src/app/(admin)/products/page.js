import ProductItem from "@/components/ProductItem";
import Link from "next/link";

const Products = async () => {
  const response = await fetch("http://localhost:5000/products");
  const data = await response.json();

  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-10 pt-10 pb-12">
        <h1 className="text-3xl">Products</h1>
        <Link className="text-orange-500 underline" href="/products/add">
          Add new product
        </Link>
      </div>
      {data.products.map((item) => (
        <ProductItem item={item} />
      ))}
    </div>
  );
};

export default Products;

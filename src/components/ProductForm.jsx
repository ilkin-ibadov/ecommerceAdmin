"use client";

import CustomComponents from "@/components/CustomComponents";

const ProductForm = ({ product, handleInputChange }) => {
  const hasData = Object.entries(product).length;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="grid grid-cols-2 gap-4 h-fit p-[50px]"
    >
      <CustomComponents.Input
        title="Title"
        inputName="title"
        inputValue={hasData ? product.title : ""}
        handleInputChange={handleInputChange}
        placeholder="Add product title"
      />

      <CustomComponents.Input
        title="Description"
        inputName="description"
        multiline={true}
        inputValue={hasData ? product.description : ""}
        handleInputChange={handleInputChange}
        placeholder="Add product description"
      />

      <CustomComponents.Select
        inputName="category"
        options={["food", "clothing"]}
        inputValue={hasData ? product.category : ""}
        title="Categories"
        handleInputChange={handleInputChange}
        placeholder="Add product category"
      />

      <CustomComponents.Input
        title="Price"
        inputName="price"
        inputType="number"
        inputValue={hasData ? product.price : ""}
        handleInputChange={handleInputChange}
        placeholder="Add product price"
      />

      <CustomComponents.Input
        title="Stock"
        inputName="stock"
        inputValue={hasData ? product.stock : ""}
        handleInputChange={handleInputChange}
        placeholder="Add product stock"
      />

      <CustomComponents.FileInput
        title="Gallery"
        fileType=".jpg, .jpeg, .png, .svg, .webp"
        inputType="file"
        inputName="gallery"
        handleInputChange={handleInputChange}
        placeholder="Add product images"
      />

      <button
        type="submit"
        className="border-[1px] border-blue-800 bg-blue-500 text-white py-3 rounded-lg"
      >
        {hasData ? "Save" : "Add"}
      </button>
    </form>
  );
};

export default ProductForm;

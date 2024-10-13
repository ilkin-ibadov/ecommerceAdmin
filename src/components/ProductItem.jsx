"use client";

import Image from "next/image";
import EditIcon from "../assets/icons/edit.svg";
import DeleteIcon from "../assets/icons/delete.svg";
import { useRouter } from "next/navigation";

const ProductItem = ({ item }) => {
  const router = useRouter();

  return (
    <div className="w-full flex justify-between px-12 py-6 border border-zinc-300">
      <div className="flex gap-12">
        <h3>{item.title}</h3>
        <p>
          {item.price} {item.currency}
        </p>
        <p>{item.stock}</p>
        <p>{item.category}</p>
      </div>

      <div className="flex gap-6">
        <button
          onClick={() => {
            router.push(
              `http://localhost:3000/products/edit/?productId=${item._id}`
            );
          }}
        >
          <Image className="size-6" src={EditIcon} />
        </button>

        <button>
          <Image className="size-6" src={DeleteIcon} />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

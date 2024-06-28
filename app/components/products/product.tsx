import type { Product as ProductType } from "@/lib/types";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/hooks";
import Image from "next/image";
import { FaStar, FaPlus } from "react-icons/fa";

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="w-full md:w-[45%] lg:w-[23%] mx-auto mb-10 relative curp">
      <div className="border-[rgba(0,0,0,0.1)] border rounded-lg h-[200px]">
        <Image
          height={100}
          width={100}
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full shrink-0"
        />
      </div>
      <div className="flex mt-4">
        <h3 className=" w-full whitespace-nowrap overflow-hidden overflow-ellipsis me-8">
          {product.title}
        </h3>
        <span className=" inline-flex items-center">
          <FaStar size={16} className=" me-2" />
          {product.rating.rate}
        </span>
      </div>
      <div className=" text-grey">{product.category}</div>
      <div className=" flex items-center justify-between mt-4">
        <span className=" font-bold">${Number(product.price).toFixed(2)}</span>
        <button
          className="rounded-full h-8 w-8 bg-primary inline-flex items-center justify-center text-white"
          onClick={handleAddToCart}
        >
          <FaPlus size={16} />
        </button>
      </div>
    </div>
  );
};

export default Product;

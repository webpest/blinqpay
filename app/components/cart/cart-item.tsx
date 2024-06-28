import type { CartItem } from "@/lib/types";
import {
  increaseQty,
  decreaseQty,
  deleteFromCart,
} from "@/lib/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/hooks";
import Image from "next/image";
import { FaPlus, FaTrashAlt, FaMinus } from "react-icons/fa";
const CartItem = ({ item }: { item: CartItem }) => {
  const dispatch = useAppDispatch();
  const handleIncreaseQty = (itemId: number) => {
    dispatch(increaseQty({ id: itemId }));
  };
  const handleDecreaseQty = (itemId: number) => {
    dispatch(decreaseQty({ id: itemId }));
  };
  const handleDeleteItem = (itemId: number) => {
    dispatch(deleteFromCart({ id: itemId }));
  };
  return (
    <div className="w-full flex flex-col gap-y-3 p-6 bg-[rgba(0,0,0,0.06)]">
      <div>
        <h3 className=" font-semibold">{item.title}</h3>
        <p className=" text-grey text-sm">{item.category}</p>
      </div>
      <div className="flex gap-x-8">
        <div className="bg-white w-[250px] h-[200px] relative">
          <Image
            src={item.image}
            alt={item.title}
            height={200}
            width={200}
            className="object-contain w-full h-full shrink-0"
          />
        </div>
        <div className="flex flex-col">
          <p className=" mb-8">{item.description}</p>
          <div className="flex justify-between mt-auto">
            <div className=" text-xl font-semibold">
              ${Number(item.price).toFixed(2)}
            </div>
            <div className="flex items-center">
              <button onClick={() => handleDecreaseQty(item.id)}>
                <FaMinus size={16} />
              </button>
              <span className=" text-xl mx-2 font-bold">{item.quantity}</span>
              <button onClick={() => handleIncreaseQty(item.id)}>
                <FaPlus size={16} />
              </button>

              <button
                onClick={() => handleDeleteItem(item.id)}
                className=" ms-4"
              >
                <FaTrashAlt size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

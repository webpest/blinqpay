import type { CartItem } from "@/lib/types";
import { selectCartTotalAmount } from "@/lib/features/cart/cartSlice";
import { useAppSelector } from "@/lib/hooks";

interface CartSummaryProps {
  items: CartItem[];
}

const CartSummary = ({ items }: CartSummaryProps) => {
  const totalAmount = useAppSelector(selectCartTotalAmount);
  return (
    <div className="lg:w-1/4 h-fit border border-borderColor">
      <h3 className=" px-5 py-3 border-b border-b-borderColor font-semibold">
        Order Summary
      </h3>
      <ul className="border-b border-b-borderColor text-grey text-sm">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between gap-x-6 py-2 px-5">
            <div className="flex min-w-0 gap-x-4">
              <span>x{item.quantity}</span> {item.title}
            </div>
            <div>${Number(item.price * item.quantity).toFixed(2)}</div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center border-b border-b-borderColor px-5 py-3 font-bold">
        <span>Order Total:</span>
        <span>${Number(totalAmount).toFixed(2)}</span>
      </div>
      <div className="px-5 py-3">
        <button
          className="text-white bg-primary px-4 py-2 rounded-3xl w-full"
          onClick={() => alert("this is a demo")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;

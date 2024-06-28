"use client";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import Header from "../Header";
import EmptyCart from "./empty-cart";
import CartItem from "./cart-item";
import CartSummary from "./cart-summary";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <>
      <Header hasSearch={false} />
      <div className="w-full flex items-center px-4 lg:px-[44px] flex-wrap py-6 mt-3">
        {cartItems.length < 1 ? (
          <EmptyCart />
        ) : (
          <div className="px-8 py-4 flex lg:gap-x-4 flex-col lg:flex-row gap-y-8 mb-16">
            <div className="lg:w-[73%] flex flex-col gap-y-6">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <CartSummary items={cartItems} />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;

import type { Metadata } from "next";
import Cart from "../components/cart/cart";

export default function CartPage() {
  return <Cart />;
}

export const metadata: Metadata = {
  title: "BlinqPay eCommerce Task - Cart Page",
};

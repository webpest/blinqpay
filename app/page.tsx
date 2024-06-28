import type { Metadata } from "next";
import Header from "./components/Header";
import Products from "./components/products/products";

export default function IndexPage() {
  return (
    <>
      <Header />
      <Products />
    </>
  );
}

export const metadata: Metadata = {
  title: "BlinqPay eCommerce Task",
};

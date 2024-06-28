import type { Metadata } from "next";
import Header from "./components/Header";
import Products from "./components/products/products";
import Menu from "./components/Menu";

export default function IndexPage() {
  return (
    <>
      <Header />
      <Menu />
      <Products />
    </>
  );
}

export const metadata: Metadata = {
  title: "BlinqPay eCommerce Task",
};

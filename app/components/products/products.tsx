"use client";
import { useGetProductsQuery } from "@/lib/features/products/productsApiSlice";
import Product from "./product";

const Products = () => {
  const { data: products } = useGetProductsQuery();

  return (
    <div className="w-full min-h-screen flex items-center px-4 lg:px-[44px] flex-wrap py-6 mt-3">
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;

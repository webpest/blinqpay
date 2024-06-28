"use client";
import { useGetProductsQuery } from "@/lib/features/products/productsApiSlice";
import { useState } from "react";
import Product from "./product";
import Menu from "../Menu";

const Products = () => {
  const { data: products } = useGetProductsQuery();
  const [filterBy, setFilterBy] = useState("");

  const filteredProducts = products?.filter((product) => {
    if (filterBy === "") return true;
    return product.category === filterBy;
  });

  const handleFilter = (filter: string) => {
    console.log(filter);
    setFilterBy(filter);
  };

  return (
    <>
      <Menu handleFilter={handleFilter} />
      <div className="w-full flex items-center px-4 lg:px-[44px] flex-wrap py-6 mt-3">
        {filteredProducts?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;

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
    setFilterBy(filter);
  };

  return (
    <>
      <Menu handleFilter={handleFilter} />
      <div className="container mx-auto pb-10 mt-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;

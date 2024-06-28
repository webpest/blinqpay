"use client";
import Tabs from "./Tabs";
import { useGetCategoriesQuery } from "@/lib/features/products/productsApiSlice";

const Menu = () => {
  const { data: categories } = useGetCategoriesQuery();
  console.log(categories);
  return (
    <div>
      <div className="container mx-auto">
        <Tabs tabs={categories} handleFilter={() => null} />
      </div>
    </div>
  );
};

export default Menu;

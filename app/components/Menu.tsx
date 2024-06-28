"use client";
import Tabs from "./Tabs";
import { useGetCategoriesQuery } from "@/lib/features/products/productsApiSlice";

const Menu = ({ handleFilter }: { handleFilter: () => void }) => {
  const { data: categories } = useGetCategoriesQuery();

  return (
    <div>
      <div className="container mx-auto">
        <Tabs tabs={categories} handleFilter={handleFilter} />
      </div>
    </div>
  );
};

export default Menu;

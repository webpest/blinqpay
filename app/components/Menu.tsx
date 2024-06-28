"use client";
import Tabs from "./Tabs";
import { useGetCategoriesQuery } from "@/lib/features/products/productsApiSlice";
import { useState, useEffect } from "react";

const Menu = ({ handleFilter }: { handleFilter: any }) => {
  const { data: categories } = useGetCategoriesQuery();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-white ${
        isFixed ? "sticky top-[75px] border-b border-b-borderColor" : ""
      }`}
    >
      <div className="container mx-auto">
        <Tabs tabs={categories} handleFilter={handleFilter} />
      </div>
    </div>
  );
};

export default Menu;

"use client";
import SearchBar from "./Search";
import Logo from "./Logo";
import { BiMenu, BiSolidUserCircle, BiSolidCart } from "react-icons/bi";
import { selectCartCount } from "@/lib/features/cart/cartSlice";
import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";

const Header = ({ hasSearch = true }: { hasSearch?: boolean }) => {
  const cartCount = useAppSelector(selectCartCount);

  return (
    <header className="py-4 border-b border-b-borderColor sticky inset-x-0 z-20 top-0 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center">
          <div className="flex-1 mr-6">
            <Link href="/" className=" text-primary">
              <Logo />
            </Link>
          </div>
          {hasSearch && (
            <div className="flex-1 flex justify-center">
              <SearchBar />
            </div>
          )}
          <div className="flex-1 flex items-center justify-end">
            <Link
              href="/cart"
              className="px-4 py-3 text-black font-medium transition-all rounded-full hover:bg-[#f7f7f7]"
            >
              <div className=" inline-flex items-center justify-center relative w-6 h-6">
                <BiSolidCart size={40} />
                {cartCount > 0 ? (
                  <span className=" absolute bg-primary text-white p-[2px] w-4 h-4 rounded-full text-[8px] right-[-5px] top-[-3px] inline-flex justify-center items-center">
                    {cartCount}
                  </span>
                ) : null}
              </div>
            </Link>
            <button className="flex items-center border ml-2 border-borderColor rounded-full p-1 transition-all hover:shadow-md">
              <BiMenu size={20} className="mr-2 ml-1" />
              <BiSolidUserCircle size={32} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

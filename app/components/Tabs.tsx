import React, { useState, useRef, useEffect } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

interface TabsProps {
  tabs: string[] | undefined;
  handleFilter: (filter: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, handleFilter }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [showLeftNav, setShowLeftNav] = useState<boolean>(false);
  const [showRightNav, setShowRightNav] = useState<boolean>(false);
  const tabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (tabRef.current) {
        setShowLeftNav(tabRef.current.scrollLeft > 0);
        setShowRightNav(
          tabRef.current.scrollLeft <
            tabRef.current.scrollWidth - tabRef.current.clientWidth
        );
      }
    };

    const handleResize = () => {
      if (tabRef.current) {
        setShowRightNav(
          tabRef.current.scrollLeft <
            tabRef.current.scrollWidth - tabRef.current.clientWidth
        );
      }
    };

    if (tabRef.current) {
      tabRef.current.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (tabRef.current) {
        tabRef.current.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTabClick = (tag: string) => {
    setActiveTab(tag);
    handleFilter(tag);
  };

  const handleScrollLeft = () => {
    if (tabRef.current) {
      tabRef.current.scrollBy({
        top: 0,
        left: -200, // Adjust the scroll distance as per your requirement
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (tabRef.current) {
      tabRef.current.scrollBy({
        top: 0,
        left: 200, // Adjust the scroll distance as per your requirement
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {showLeftNav && (
        <button
          className="absolute left-0 top-5 flex items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none border rounded-full bg-white"
          onClick={handleScrollLeft}
        >
          <BiChevronLeft size={24} />
        </button>
      )}
      <div className="flex overflow-x-hidden" ref={tabRef}>
        {tabs?.map((tab, index) => (
          <div
            key={index}
            className={`py-2 mt-1 px-4 border-b-2 cursor-pointer whitespace-nowrap flex flex-col items-center hover:text-black transition-all hover:border-borderColor ${
              activeTab === tab
                ? "border-blue-500 text-black"
                : "border-transparent"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            <span className=" mt-2">{tab}</span>
          </div>
        ))}
      </div>
      {showRightNav && (
        <button
          className="absolute right-0 top-5 flex items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none border rounded-full bg-white"
          onClick={handleScrollRight}
        >
          <BiChevronRight size={24} />
        </button>
      )}
    </div>
  );
};

export default Tabs;

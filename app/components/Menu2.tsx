"use client";
import Tabs from "./Tabs";
import { DiAndroid } from "react-icons/di";

const tabs = [
  {
    title: "Shared Homes",
    icon: <DiAndroid size={24} />,
  },
  {
    title: "OMG!",
    icon: <DiAndroid size={24} />,
  },
  {
    title: "Trending",
    icon: <DiAndroid size={24} />,
  },
  {
    title: "Rooms",
    icon: <DiAndroid size={24} />,
  },
  {
    title: "Mansions",
    icon: <DiAndroid size={24} />,
  },
  {
    title: "Amazing Pools",
    icon: <DiAndroid size={24} />,
  },
  {
    title: "Designs",
    icon: <DiAndroid size={24} />,
  },
  {
    title: "Amazing views",
    icon: <DiAndroid size={24} />,
  },
  {
    title: "Dooms",
    icon: <DiAndroid size={24} />,
  },
  {
    title: "Islands",
    icon: <DiAndroid size={24} />,
  },
  {
    title: "Tropical",
    icon: <DiAndroid size={24} />,
  },
  {
    title: "Beachfront",
    icon: <DiAndroid size={24} />,
  },
  {
    title: "Play",
    icon: <DiAndroid size={24} />,
  },
  {
    title: "Countryside",
    icon: <DiAndroid size={24} />,
  },
  {
    title: "Beach",
    icon: <DiAndroid size={24} />,
  },
  {
    title: "Cabins",
    icon: <DiAndroid size={24} />,
  },
  {
    title: "Tower",
    icon: <DiAndroid size={24} />,
  },
  {
    title: "Lakefront",
    icon: <DiAndroid size={24} />,
  },
];

const Menu = ({ isFixed }: { isFixed: boolean }) => {
  return (
    <div
      className={`mt-24 ${
        isFixed
          ? "fixed z-30 inset-x-0 bg-white border-b border-borderColor shadow-sm top-0 mt-[83px]"
          : ""
      }`}
    >
      <div className="container mx-auto">
        <Tabs tabs={tabs} handleFilter={() => null} />
      </div>
    </div>
  );
};

export default Menu;

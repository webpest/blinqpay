import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className=" w-full border border-borderColor rounded-full p-2 flex items-center shadow-md transition-all hover:shadow-lg">
      <input className="flex space-x-6 font-medium justify-between flex-1 mx-2 text-grey focus:outline-none" />
      <button className=" bg-primary h-8 w-8 rounded-full ml-auto text-white inline-flex items-center justify-center">
        <BiSearch />
      </button>
    </div>
  );
};

export default SearchBar;

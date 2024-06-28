import Link from "next/link";
import { BiCart } from "react-icons/bi";

const EmptyCart = () => {
  return (
    <div className="w-full max-w-96 text-center mx-auto flex flex-col justify-center items-center gap-y-3 mt-20">
      <div className=" w-20 h-20 rounded-full bg-grey flex items-center justify-center text-white">
        <BiCart size={60} />
      </div>
      <h2 className=" text-3xl font-semibold">Your cart is empty!</h2>
      <p className=" text-xl text-grey">
        Looks like you haven't added anything to your cart yet
      </p>
      <Link
        href="/"
        className="text-white bg-primary mt-8 px-4 py-2 rounded-3xl"
      >
        Go to products page
      </Link>
    </div>
  );
};

export default EmptyCart;

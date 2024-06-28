import { BiGlobe, BiSolidChevronUp, BiDollar } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="border-t bg-white border-t-borderColor py-3 sticky inset-x-0 bottom-0 z-30 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center text-sm">
          <ul className="flex space-x-4">
            <li>2024 BlinqPay.</li>
          </ul>
          <ul className="flex space-x-4 font-medium text-black">
            <li className="flex items-center">
              <BiGlobe size={16} className="mr-1" />
              <a href="#" className=" hover:underline">
                English (US)
              </a>
            </li>
            <li className="flex items-center">
              <BiDollar size={16} />
              <a href="#" className=" hover:underline">
                USD
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className=" hover:underline">
                Support & resources
              </a>
              <BiSolidChevronUp size={20} className="ml-1" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

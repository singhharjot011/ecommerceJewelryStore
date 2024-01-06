import "./Header.css";
import {
  BsGlobe,
  BsFillPersonFill,
  BsHeart,
  BsFillBagHeartFill,
  BsSearch,
} from "react-icons/bs";


export const Header = () => {

  return (
    <>
      <section
        id="header"
        className=" duration-500 text-biege hover:text-black bg-gradient-to-b from-black/60  to-transparent group hover:bg-gradient-to-b hover:from-biege hover:to-biege"
      >
        <div className="flex flex-col justify-center space-y-4">
          <div className="w-full flex justify-between p-2">
            <a href="#" className="flex items-center gap-2">
              <BsGlobe />
              Canada | en_US
            </a>
            <span>Free Standard Shipping over $100</span>
            <span className="flex items-center gap-2">
              <a href="#">
                <BsFillPersonFill />
              </a>
              <a href="#">Login </a> |<a href="#">Register </a>
              <a href="#wishlist" className="relative">
                <BsHeart className="h-10" />
                <span className="absolute bottom-0 -right-2 text-xs  bg-biege text-black group-hover:text-white group-hover:bg-black rounded-full px-1">
                  {0}
                </span>
              </a>
            </span>
          </div>
          <div className="w-full flex  justify-center">
            <h1 className="text-6xl" id="brand-name">
              React Jewels
            </h1>
          </div>
          <div
            className="w-full flex  items-center justify-center space-x-4 p-3"
            id="header-menu"
          >
            <a href="#home" id="header-menu-items" className="">
              Home
            </a>
            <a href="" id="header-menu-items" className="">
              Shop By Category
            </a>
            <a id="header-menu-items" className="" href="#">
              Our Story
            </a>
            <a id="header-menu-items" className="" href="#">
              Reviews
            </a>
            <a id="header-menu-items" className="" href="#">
              Home
            </a>
            <a id="header-menu-items" className="" href="#">
              Contact Us
            </a>
            <a id="header-menu-items" className="" href="#">
              My Account
            </a>
            <a href="#">
              <BsSearch />
            </a>
            <a className="relative" href="#">
              <BsFillBagHeartFill />
              <span className="absolute -bottom-2 -right-3 text-xs  bg-biege text-black group-hover:text-white group-hover:bg-black rounded-full px-1">
                {0}
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
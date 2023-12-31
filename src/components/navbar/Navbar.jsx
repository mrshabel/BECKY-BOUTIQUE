import { useState } from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiFillHeart, AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import CartIcon from "../cart/CartIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { title: "Home", link: "/" },
    { title: "Store", link: "products" },
    { title: "Category", link: "categories" },
  ];
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <header className="flex justify-between items-center px-4 py-2 h-14 border-b-gray-200 bg-white shadow-sm fixed top-0 left-0 w-full z-10">
      <h3 className="font-semibold uppercase">Beckys</h3>
      <ul className="hidden sm:flex gap-6 px-6 ">
        {links.map((link, index) => (
          <li key={index} className="py-2">
            <NavLink
              to={link.link}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-orange-500 text-orange-500 "
                  : "transition-all duration-300 hover:text-orange-500 hover:border-b-orange-500"
              }
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div
        className={`transition-all duration-500 h-full sm:hidden z-50 bg-gray-100 w-[60%] ${
          isOpen ? "fixed left-0 top-0 " : "fixed left-[-100%] top-0"
        } `}
      >
        <div className="h-full flex flex-col pt-[5vh] px-5">
          <div
            className="place-self-end cursor-pointer "
            onClick={handleToggle}
          >
            <AiOutlineClose size={"1.5em"} />
          </div>
          <div className="text-center pt-7">
            <h2 className="font-semibold ">Beckys Boutique</h2>
            <p className="font-light ">Welcome Back</p>
          </div>
          <ul className=" flex flex-col gap-10 px-4 uppercase pt-12">
            {links.map((link, index) => (
              <li key={index} className="border-b py-1" onClick={handleToggle}>
                <NavLink to={link.link} className="hover:border-b">
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="">
        <div className="flex p-2 items-center gap-2">
          <div className="hidden md:block">
            <Searchbar />
          </div>
          <CartIcon />
          <AiFillHeart fill={"red"} size={20} />
        </div>
      </div>
      <div className="sm:hidden p-2 cursor-pointer" onClick={handleToggle}>
        <HiOutlineMenuAlt3 size={"1.5em"} className="" />
      </div>
    </header>
  );
}

import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Navicon from "./Navicon";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
const Header = () => {
  const { cartlist } = useCart();
  const [open, setopen] = useState(false);

  return (
    <>
      <div className="w-full flex py-5 justify-between items-center px-14 flex-wrap h-auto dark:bg-slate-500">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-semibold text-2xl">ShopingMate</span>
          </Link>
        </div>
        <div className="flex items-center gap-14">
          <div className=" hidden md:flex gap-10 items-center">
            <NavLinks />
          </div>
          <div className=" hidden md:flex text-2xl bg-slate-300 rounded-xl p-3">
            cart:{cartlist.length}
          </div>
        </div>
        <div className="md:hidden flex justify-end">
          <button onClick={() => setopen(!open)}>
            <Navicon />
          </button>
        </div>
        {open && (
          <div className="flex flex-col basis-full items-center gap-2 py-4 md:hidden">
            <NavLinks />
          </div>
        )}
      </div>
    </>
  );
};
export default Header;

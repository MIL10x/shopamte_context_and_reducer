import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const NavLinks = () => {
  const [dark, setdark] = useState(false);
  const darkmodehandle = () => {
    setdark(!dark);
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <>
      <Link to="/" className="hover:text-orange-500 text-xl font-medium">
        Home
      </Link>
      <Link to="/Cart" className="hover:text-orange-500 text-xl font-medium">
        Cart
      </Link>
      <div className="bg-slate-600 p-3 rounded-xl">
        <button
          onClick={() => darkmodehandle()}
          className={dark ? "text-white" : "text-black"}
        >
          {dark ? "light" : "Dark"}
        </button>
      </div>
    </>
  );
};

export default NavLinks;

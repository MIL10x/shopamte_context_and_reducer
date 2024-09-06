import React from "react";
import Logo from "./Logo";
const Footer = () => {
  return (
    <div className="h-24 w-full flex flex-wrap items-center justify-between px-10 mt-10">
      <div className="flex flex-col items-center gap-1">
        <Logo />
        <p className="font-semibold">Shopmate</p>
      </div>
      <div className="flex gap-3">
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <a href="#">Linkedin</a>
      </div>
    </div>
  );
};

export default Footer;

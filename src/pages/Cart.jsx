import React from "react";
import { useCart } from "../context/CartContext";
const Cart = () => {
  const { removeCartlist, cartlist, total } = useCart();
  const handledelete = (cart) => {
    removeCartlist(cart);
    console.log(cartlist);
  };

  return (
    <div className="container mx-auto flex flex-wrap gap-3">
      <div className="text-2xl font-semibold w-full text-center">
        Total Amount : {total}
      </div>
      {cartlist.map((f) => (
        <div
          className="w-full h-36 rounded-xl bg-slate-300 p-10 flex items-center justify-between"
          id={f.id}
        >
          <div className="flex items-center gap-2">
            <img src={f.photo} className="size-24 rounded-xl" alt="" />
            <div className="flex flex-col">
              <p className="text-2xl">
                <span>Name: </span>
                {f.name}
              </p>
              <p className="text-xl">
                <span>ID: </span>
                {f.id}
              </p>
            </div>
          </div>
          <div>
            <button onClick={() => handledelete(f.id)}>delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

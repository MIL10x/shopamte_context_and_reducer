import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useParams } from "react-router";
const Detail = ({ iteem }) => {
  const { removeCartlist, addtocart } = useCart();
  const ids = useParams();
  const [isopen, isclose] = useState(true);
  const valueTopass = iteem.find((item) => Number(ids.id) === item.id);
  const handlecart = () => {
    isclose(!isopen);
    if (isopen) {
      addtocart(valueTopass);
    } else {
      removeCartlist(valueTopass.id);
    }
  };

  return (
    <div className="grid grid-flow-col container mx-auto">
      <div className="size-[100%]">
        <img src={valueTopass.photo} alt="" />
      </div>
      <div className="bg-slate-300 flex gap-3 flex-col rounded-e-2xl p-10  py-20 justify-between">
        <div className=" flex gap-3 flex-col">
          <p className="text-4xl">
            <span>Name: </span>
            {valueTopass.name}
          </p>
          <p className="text-2xl">
            <span>price: </span>
            {valueTopass.price}
          </p>
          <p className="text-xl">
            <span>content: </span>
            {valueTopass.content}$
          </p>
        </div>
        <button
          onClick={() => handlecart()}
          className="bg-slate-600 p-2 rounded-md"
        >
          {isopen ? "Add to cart" : "Remove"}
        </button>
      </div>
    </div>
  );
};

export default Detail;

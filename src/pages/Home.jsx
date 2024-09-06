import React from "react";
import { Link } from "react-router-dom";
const Home = ({ iteem }) => {
  return (
    <>
      <div
        id="342"
        className="container mx-auto mt-10 flex flex-wrap justify-center gap-5"
      >
        {iteem.map((item) => (
          <Link to={`/Detail/${item.id}`}>
            <div
              className="flex flex-col gap-5 bg-slate-300 w-80 rounded-2xl p-4 "
              id={item.id}
            >
              <img src={item.photo} alt="" className=" size-72 rounded-t-2xl" />
              <p className="text-3xl font-semibold">{item.name}</p>
              <p className="">{item.content}</p>
              <p className="text-2xl">Price: {item.price}$</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;

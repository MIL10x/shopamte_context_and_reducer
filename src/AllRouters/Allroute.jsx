import { Home, Details, Cart } from "../pages/Indeexx";
import { Routes, Route } from "react-router";
import PhO from "../assets/PhotoOne.jpeg";
import PhT from "../assets/PhotoTwo.jpg";
import PhTH from "../assets/PhotoThree.jpeg";

const AllRoute = ({ cart, setcart }) => {
  const iteem = [
    {
      id: 0o1,
      name: "HeadphoneOne",
      photo: PhO,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandaevero placeat tempora nobis? Doloribus, reprehenderit",
      price: 20,
    },
    {
      id: 0o2,
      name: "HeadphoneTwo",
      photo: PhT,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandaevero placeat tempora nobis? Doloribus, reprehenderit",
      price: 30,
    },
    {
      id: 0o3,
      name: "HeadphoneThree",
      photo: PhTH,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandaevero placeat tempora nobis? Doloribus, reprehenderit",
      price: 35,
    },
    {
      id: 0o3,
      name: "HeadphoneThree",
      photo: PhTH,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandaevero placeat tempora nobis? Doloribus, reprehenderit",
      price: 35,
    },
    {
      id: 0o3,
      name: "HeadphoneThree",
      photo: PhTH,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandaevero placeat tempora nobis? Doloribus, reprehenderit",
      price: 35,
    },
    {
      id: 0o3,
      name: "HeadphoneThree",
      photo: PhTH,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandaevero placeat tempora nobis? Doloribus, reprehenderit",
      price: 35,
    },
    {
      id: 0o3,
      name: "HeadphoneThree",
      photo: PhTH,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandaevero placeat tempora nobis? Doloribus, reprehenderit",
      price: 35,
    },
  ];
  return (
    <>
      <main className="h-auto  min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home iteem={iteem} />} />
          <Route
            path="/Detail/:id"
            element={<Details iteem={iteem} cart={cart} setcart={setcart} />}
          />
          <Route
            path="/Cart"
            element={<Cart cart={cart} setcart={setcart} />}
          />
        </Routes>
      </main>
    </>
  );
};

export default AllRoute;

import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../Reducer/ContextReducer";

const InitialState = {
  total: 0,
  cartlist: [],
};

const CartContext = createContext(InitialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, InitialState);

  const addtocart = (cart) => {
    const updatedList = state.cartlist.concat(cart);
    updatevalue(updatedList);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedList,
      },
    });
  };

  const removeCartlist = (item) => {
    const updatedList = state.cartlist.filter((i) => i.id !== item);
    updatevalue(updatedList);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { products: updatedList },
    });
  };
  const updatevalue = (products) => {
    const total = products.reduce((acc, product) => acc + product.price, 0);
    dispatch({
      type: "UPDATE_LIST_VALUE",
      payload: { products: total },
    });
  };
  const value = {
    total: state.total,
    cartlist: state.cartlist,
    addtocart,
    removeCartlist,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

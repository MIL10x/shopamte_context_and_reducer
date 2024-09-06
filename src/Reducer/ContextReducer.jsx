export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartlist: payload.products };
    case "REMOVE_FROM_CART":
      return { ...state, cartlist: payload.products };
    case "UPDATE_LIST_VALUE":
      return { ...state, total: payload.products };
    default:
      throw new Error("No case found in cartReducer");
  }
};

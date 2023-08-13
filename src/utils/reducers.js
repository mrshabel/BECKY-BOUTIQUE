export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cart: [...state.cart, { ...action.payload, cartQuantity: 1 }] };
    case "UPDATE_CART":
      return {
        cart: [
          ...state.cart,
          {
            ...state.cart.find((product) => product.id === action.payload.id),
            cartQuantity: action.payload.quantity,
          },
        ],
      };

    case "REMOVE_FROM_CART":
      return {
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };

    case "CLEAR_CART":
      return { cart: [] };

    default:
      break;
  }
}

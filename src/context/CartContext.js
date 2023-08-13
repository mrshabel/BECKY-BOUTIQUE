import {
  useContext,
  createContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { cartReducer } from "../utils/reducers";

const UserCartContext = createContext();

//retrieving cart from localStorage
const cartItem = JSON.parse(localStorage.getItem("beckysCart") || "[]");

export default function CartContext({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: cartItem,
  });

  useEffect(() => {
    //saving cart to localStorage
    localStorage.setItem("beckysCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <UserCartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserCartContext.Provider>
  );
}

export function useCart() {
  return useContext(UserCartContext);
}

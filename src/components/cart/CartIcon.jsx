import { GrCart } from "react-icons/gr";
import { useCart } from "../../context/CartContext";
import CartDropdown from "./CartDropdown";
import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

export default function CartIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef();
  const { cart } = useCart();

  function handleCart(e) {
    e.stopPropagation();
    setIsOpen((isOpen) => !isOpen);
  }

  useOutsideClick(() => {
    setIsOpen(false);
  }, cartRef);

  return (
    <div className="relative p-2 cursor-pointer ">
      <div onClick={handleCart} className="relative p-2 cursor-pointer">
        <span className="absolute top-0 right-0 text-xs ">{cart.length}</span>
        <GrCart size={20} />
      </div>
      {isOpen && (
        <div
          ref={cartRef}
          className="z-10 absolute left-[-40px] top-11 md:top-10 sm:left-[-30vw] lg:left-[-20vw] "
        >
          <CartDropdown />
        </div>
      )}
    </div>
  );
}

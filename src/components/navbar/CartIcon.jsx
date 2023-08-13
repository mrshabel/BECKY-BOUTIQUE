import { GrCart } from "react-icons/gr";
import { useCart } from "../../context/CartContext";

export default function CartIcon() {
  const { cart } = useCart();

  return (
    <div className="relative p-2">
      <span className="absolute top-0 right-0 text-xs ">{cart.length}</span>
      <GrCart size={20} />
    </div>
  );
}

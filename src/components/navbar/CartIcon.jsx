import { GrCart } from "react-icons/gr";
export default function CartIcon() {
  return (
    <div className="relative p-2">
      <span className="absolute top-0 right-0 text-xs ">0</span>
      <GrCart />
    </div>
  );
}

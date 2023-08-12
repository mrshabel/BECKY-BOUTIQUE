import { AiOutlineRight } from "react-icons/ai";
import hero1 from "../../assets/images/hero1.jpg";
import { FaCartPlus } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import SaveProduct from "./SaveProduct";

export default function ProductCard() {
  return (
    <div className="flex flex-col gap-6 min-h-[350px] w-[250px] px-2 py-1 pb-2 rounded-md ">
      <img
        src={hero1}
        alt="hero"
        className="w-full h-[80%]  rounded-md object-center"
      />
      <div className="flex flex-col items-center">
        <div className="px-1 text-center">
          <p className="font-semibold uppercase text-[15px] text-amber-950 tracking-wide mb-2">
            Women's wear
          </p>
          <p className="text-sm">GH{"\u20B5 "}10.50</p>
        </div>
        <div className="flex gap-8 justify-between items-center p-1 h-10 w-full ">
          <SaveProduct />

          <button className=" p-2 h-8 ease-in duration-100 text-gray-900 mt-2 font-normal hover:text-orange-600 text-sm flex items-center gap-2 place-self-end ">
            Add to cart
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
  );
}

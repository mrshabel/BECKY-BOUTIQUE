import { AiOutlineRight } from "react-icons/ai";
import hero1 from "../../assets/images/hero1.jpg";
import { FaCartPlus } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import SaveProduct from "./SaveProduct";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { toast } from "react-hot-toast";

export default function ProductCard({ product }) {
  const { cart, dispatch } = useCart();

  const productInCart = cart.find((cartItem) => cartItem.id === product.id);

  function handleCart() {
    if (productInCart) {
      dispatch({ type: "REMOVE_FROM_CART", payload: product });
      toast.error("Product removed from cart");
    } else {
      dispatch({ type: "ADD_TO_CART", payload: product });
      toast.success("Product added to cart");
    }
  }

  return (
    <div className="flex flex-col gap-8 h-[400px] w-[200px] md:w-[300px] px-2 py-1 pb-2 rounded-md ">
      <div className="flex justify-center w-full h-[50%]">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="w-[70%] h-full rounded-md object-center"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="px-1 text-center">
          <p className="font-semibold uppercase text-[15px] text-amber-950 tracking-wide mb-2 ">
            {product.title}
          </p>
          <p className="text-sm">
            GH{"\u20B5 "}
            {product.price}
          </p>
        </div>
        <div className="flex gap-8 justify-between items-center p-1 h-10 w-full ">
          <SaveProduct />

          <button
            className=" p-2 h-8 ease-in duration-100 text-gray-900 mt-2 font-normal hover:text-orange-600 text-sm flex items-center gap-2 place-self-end "
            onClick={handleCart}
          >
            {productInCart ? "Remove from Cart" : "Add to Cart"}
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
  );
}

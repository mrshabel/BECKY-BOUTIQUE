import hero1 from "../../assets/images/hero1.jpg";
import SaveProduct from "./SaveProduct";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";

export default function SingleProduct({ product }) {
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
    <main className="h-full flex flex-col items-center sm:flex-row sm:justify-center gap-2 md:gap-6 py-6 mx-auto md:w-[50vw] ">
      <section className="w-[70%] sm:w-[60%] md:w-[350px] h-[350px] md:h-[400px] ">
        <img
          src={product.image}
          className="w-full h-[300px] object-center aspect-auto bg-no-repeat "
          alt="product"
        />
      </section>
      <section className=" px-4 flex flex-col gap-5 md:gap-6 md:justify-start">
        <div className="flex flex-col gap-4">
          <h1 className="tracking tracking-widest font-normal text-xl self-start">
            {product.title}
          </h1>
          <p className="font-bold text-gray-600">
            GH{"\u20B5 "} {product.price}
          </p>
          <p className="uppercase text-gray-800 text-lg ">
            <span className="font-extrabold text-[11px] mr-1">color:</span>{" "}
            neutral
          </p>
          <p className="capitalize text-gray-800 text-lg">
            <span className="font-extrabold text-[11px] uppercase mr-1 ">
              size:
            </span>
            One size
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="flex items-center justify-center w-full h-10 px-3 py-[1px] bg-green-800 uppercase font-semibold text-xs tracking-widest hover:opacity-90 text-gray-100"
            onClick={handleCart}
          >
            {productInCart ? "Remove from Cart" : "Add to Cart"}
          </button>
          <SaveProduct />
        </div>
        <div className="flex flex-col gap-4">
          <p className="uppercase text-gray-800 text-lg">
            <span className="font-extrabold text-[11px] mr-1">category: </span>
            {product.category}
          </p>
        </div>
      </section>
    </main>
  );
}

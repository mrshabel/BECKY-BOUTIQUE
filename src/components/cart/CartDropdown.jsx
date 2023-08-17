import { useCart } from "../../context/CartContext";
import { IoMdTrash } from "react-icons/io";

export default function CartDropdown() {
  const { cart, dispatch } = useCart();
  return (
    <div className="w-[210px] md:w-[300px] max-h-[200px] overflow-y-auto shadow-xl border-[0.5px] border-opacity-70 rounded-md px-1 py-2 bg-white">
      {cart?.length === 0 ? (
        <div className="h-[50px] flex items-center justify-center tracking-wide font-normal text-gray-900 ">
          Cart is empty
        </div>
      ) : (
        <>
          <ul className=" ">
            {cart.map((product) => (
              <li
                key={product.id}
                className="grid grid-cols-[3rem_1fr_1.5rem] md:grid-cols-[5rem_1fr_2.8rem] pb-2 items-center"
              >
                <div className="h-[3rem] md:h-[3.5rem] mr-1 ">
                  <img
                    loading="lazy"
                    src={product.images[0]}
                    alt={product.title}
                    className="object-center h-full w-full bg-no-repeat "
                  />
                </div>
                <div className=" flex flex-col items-center text-gray-700">
                  <div className="font-semibold  text-center ">
                    {product.title}
                  </div>
                  <div className="text-[11px]">
                    GH{"\u20B5 "} {product.price}
                  </div>
                </div>
                <IoMdTrash
                  size={22}
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch({ type: "REMOVE_FROM_CART", payload: product });
                  }}
                />
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <button className="bg-gray-900 text-gray-200 uppercase font-semibold tracking wide text-[12px] w-[90%] py-2 rounded-sm">
              checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

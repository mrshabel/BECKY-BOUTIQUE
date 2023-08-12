import hero1 from "../../assets/images/hero1.jpg";
import SaveProduct from "./SaveProduct";
export default function SingleProduct({}) {
  const product = {
    name: "Beckys plus size wear",
    price: 650.0,
    color: "Neutral",
    size: "One size",
    category: "women",
  };
  return (
    <main className="h-full flex flex-col sm:flex-row sm:justify-center gap-6 py-6 ">
      <section className="w-[80%] sm:w-[60%] md:w-[350px] h-[65vh] ">
        <img
          src={hero1}
          className="w-full h-[400px] object-cover aspect-auto bg-no-repeat "
          alt="product"
        />
      </section>
      <section className="pb-8 px-4 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="tracking tracking-widest font-normal text-xl self-start">
            {product.name}
          </h1>
          <p className="font-bold text-gray-600">
            GH{"\u20B5 "} {product.price.toFixed(2)}
          </p>
          <p className="uppercase text-gray-800 text-lg ">
            <span className="font-extrabold text-[11px] mr-1">color:</span>{" "}
            {product.color}
          </p>
          <p className="capitalize text-gray-800 text-lg">
            <span className="font-extrabold text-[11px] uppercase mr-1 ">
              size:
            </span>{" "}
            {product.size}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center w-full h-10 px-3 py-[1px] bg-green-800 uppercase font-semibold text-xs tracking-widest hover:opacity-90 text-gray-100">
            Add to Cart
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

import { AiOutlineArrowRight } from "react-icons/ai";
import ProductCard from "../products/ProductCard";
import { Link } from "react-router-dom";

export default function Latest() {
  return (
    <section className="">
      <h1 className="font-bold text-2xl uppercase text-gray-900 mb-4">
        Latest Collection
      </h1>
      <main className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>
      <footer className="mt-5">
        <Link
          to="products"
          className="inline-flex justify-center items-center gap-3 bg-gray-900 text-white px-3 py-1 rounded-sm"
        >
          Browse more{" "}
          <span>
            <AiOutlineArrowRight />{" "}
          </span>
        </Link>
      </footer>
    </section>
  );
}

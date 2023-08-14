import { Link } from "react-router-dom";
import ProductCard from "../products/ProductCard";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export default function Trending() {
  const [products, setProducts] = useState([]);
  const url = "https://dummyjson.com/products?limit=6&skip=15";
  const { data, error, loading } = useFetch(url);

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  return (
    <section className="pt-16 md:pt-20 ">
      <h1 className="font-bold text-2xl uppercase text-gray-900 mb-4 ">
        Trending sales
      </h1>
      <main className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10 place-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
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

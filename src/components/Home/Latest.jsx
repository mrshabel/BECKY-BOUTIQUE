import { AiOutlineArrowRight } from "react-icons/ai";
import ProductCard from "../products/ProductCard";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductLoader from "../products/ProductLoader";
import useLoader from "../../hooks/useLoader";

export default function Latest() {
  const [products, setProducts] = useState([]);
  const url = "https://dummyjson.com/products?limit=6";

  //improve fetching products
  const { data, error, loading: fetchLoading } = useFetch(url);
  const loading = useLoader();

  const dataLoading = fetchLoading || loading;

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  return (
    <section className="">
      <h1 className="font-bold text-2xl uppercase text-gray-900 mb-4">
        Latest Collection
      </h1>
      <main className="">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 place-items-center ">
          {dataLoading
            ? Array.from({ length: 6 }, (_, i) => (
                <ProductLoader size="small" />
              ))
            : products.map((product) => (
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

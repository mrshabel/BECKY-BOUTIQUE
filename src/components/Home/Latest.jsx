import { AiOutlineArrowRight } from "react-icons/ai";
import ProductCard from "../products/ProductCard";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductLoader from "../products/ProductLoader";
import useLoader from "../../hooks/useLoader";
import Slider from "../Slider";

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
      <main className="pt-7">
        {dataLoading ? (
          <div className="w-full mx-auto lg:w-[90%] xl:w-[60%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 lg:gap-10 place-items-center">
            {Array.from({ length: 3 }, (_, i) => (
              <ProductLoader size="small" />
            ))}{" "}
          </div>
        ) : (
          <>
            <div className="w-[65vw] sm:w-[35vw] mx-auto md:hidden">
              <Slider products={products} size={"small"} />
            </div>
            <div className="w-full hidden md:block mx-auto lg:w-[90%] xl:w-[60%]">
              <Slider products={products} size={"large"} />
            </div>
          </>
        )}
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

import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductCard from "./ProductCard";
import useLoader from "../../hooks/useLoader";
import ProductLoader from "./ProductLoader";
export default function Productlist() {
  const [products, setProducts] = useState([]);

  //improve fetching products
  const {
    data,
    error,
    loading: fetchLoading,
  } = useFetch("https://dummyjson.com/products");
  const loading = useLoader();

  const dataLoading = fetchLoading || loading;

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  // if (loading)
  //   return (
  //     <div className="h-full flex justify-center items-center">
  //       <div className=" h-10 w-10 rounded-full bg-violet-500 animate-ping"></div>
  //     </div>
  //   );

  return (
    <div className="px-12 w-full ">
      <h3 className="text-gray-500 font-extralight text-[14px] text-center mb-6">
        1,200 styles found
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 place-items-center">
        {dataLoading
          ? Array.from({ length: 20 }, (_, i) => (
              <ProductLoader key={i} size="small" />
            ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
}

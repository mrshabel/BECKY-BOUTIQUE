import SingleProduct from "../components/products/SingleProduct";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function ProductDetail() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const url = `https://fakestoreapi.com/products/${id}`;
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  if (loading)
    return (
      <div className="flex h-screen justify-center items-center">
        <p>Loading</p>
      </div>
    );
  return (
    <div className="p-8 md:p-12">
      <SingleProduct id={id} product={product} />
    </div>
  );
}

import SingleProduct from "../components/products/SingleProduct";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function ProductDetail() {
  const { id } = useParams();

  const url = `https://dummyjson.com/products/${id}`;
  const { data, loading, error } = useFetch(url);

  if (loading)
    return (
      <div className="flex h-screen justify-center items-center">
        <p>Loading</p>
      </div>
    );
  return (
    <div className="p-8 md:p-12">
      <SingleProduct id={id} product={data} />
    </div>
  );
}

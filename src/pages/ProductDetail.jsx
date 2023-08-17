import SingleProduct from "../components/products/SingleProduct";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ProductLoader from "../components/products/ProductLoader";
import useLoader from "../hooks/useLoader";

export default function ProductDetail() {
  const { id } = useParams();

  const url = `https://dummyjson.com/products/${id}`;

  //improve fetching products
  const { data, error, loading: fetchLoading } = useFetch(url);
  const loading = useLoader();

  const dataLoading = fetchLoading || loading;

  if (dataLoading)
    return (
      <div className="flex h-screen justify-center items-center">
        <ProductLoader size="large" />
      </div>
    );
  return (
    <div className="p-8 md:p-12 md:h-[80vh]">
      <SingleProduct id={id} product={data} />
    </div>
  );
}

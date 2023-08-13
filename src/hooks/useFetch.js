import { useEffect, useState } from "react";
export default function useFetch(link) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(data, loading, error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetch(link);
        const fetchedData = await result.json();

        setData(fetchedData);
        setLoading(false);

        setError("");
      } catch (error) {
        setLoading(false);
        setData("");
        setError(error);
      }
    };
    return () => fetchData();
  }, []);

  return { data, loading, error };
}

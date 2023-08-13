import { useEffect, useState } from "react";
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(data, loading, error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetch(url);
        const fetchedData = await result.json();
        setData(fetchedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    return () => fetchData();
  }, [url]);

  return { data, loading, error };
}

import { useEffect, useState } from "react";
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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

  console.log(data, loading, error);

  return { data, loading, error };
}

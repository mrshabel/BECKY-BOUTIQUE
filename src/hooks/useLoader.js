import { useEffect, useState } from "react";

export default function useLoader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(t);
    };
  });

  return loading;
}

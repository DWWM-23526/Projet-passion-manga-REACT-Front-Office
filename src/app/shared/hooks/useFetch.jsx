import { useEffect, useState } from "react";
import { useApi } from "../../core/hooks/useApi";

export function useFetch(endpoint) {
  const { baseService } = useApi();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await baseService.fetchData(endpoint);
        if (isMounted) setData(result);
      } catch (err) {
        if (isMounted) setError(err.message || "An unexpected error occurred");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [endpoint, baseService]);

  return { data, loading, error };
}
import { useEffect, useState } from "react";
import MangakaService from "../services/MangakaService";

function useMangaka() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const mangakaService = new MangakaService();

    mangakaService
      .fetchAllDataByTable()
      .then((fetchAllDataByTable) => {
        setData(fetchAllDataByTable);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  return { data, loading, error };
}

export default useMangaka;

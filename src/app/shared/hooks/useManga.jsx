import { useEffect, useState } from "react";
import MangaService from "../services/MangaService";

function useManga() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const mangaService = new MangaService();
    console.log('Fetching data ...');

    mangaService
      .fetchAllDataByTable()
      .then((fetchAllDataByTable) => {
        console.log('Data fetched:', fetchAllDataByTable);
        setData(fetchAllDataByTable);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Error fetching data:', err);
        setError(err);
        setLoading(false);
      });
  }, []);
  return { data, loading, error};
}

export default useManga;

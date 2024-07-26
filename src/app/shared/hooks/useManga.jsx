import { useEffect, useState } from "react";
import MangaService from "../services/MangaService";

export function useManga() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const mangaService = new MangaService();

    mangaService
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

export function useMangaId(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const mangaService = new MangaService();

    mangaService
      .fetchDataByID(id)
      .then((mangaData) => {
        setData(mangaData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);
  return { data, loading, error };
}

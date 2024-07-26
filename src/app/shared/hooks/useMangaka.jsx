import { useEffect, useState } from "react";
import MangakaService from "../services/MangakaService";

export function useMangaka() {
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

export function useMangakaId(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const mangaService = new MangakaService();

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

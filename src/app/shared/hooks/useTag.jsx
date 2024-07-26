import { useEffect, useState } from "react";
import TagService from "../services/TagService";

export function useTag() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const tagService = new TagService();

    tagService
      .fetchAllDataByTable()
      .then((fetchAllDataByTable) => {
        setData(fetchAllDataByTable);
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

export function useTagId(id){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const mangaService = new TagService();

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

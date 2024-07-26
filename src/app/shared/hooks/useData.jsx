import { useEffect, useState } from "react";
import BaseService from "../../core/service/BaseService";

export function useData(endPointTable) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const baseService = new BaseService();

    baseService
      .fetchAllDataByTable(endPointTable)
      .then((fetchData) => {
        setData(fetchData);
      })
      .catch((err) => {
        throw new Error(`Error: ${err}`);
      });
  }, [endPointTable]);
  return { data };
}

export function useDataId(endPointTable, id) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const baseService = new BaseService();

    baseService
      .fetchDataByID(endPointTable, id)
      .then((dataById) => {
        setData(dataById);
      })
      .catch((err) => {
        throw new Error(`Error: ${err}`);
      });
  }, [endPointTable, id]);
  return { data };
}

// export function useDataFav(endPointTable, idManga, idUser) {
  
// }



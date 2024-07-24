/* eslint-disable react/prop-types */
import { useCallback, useEffect, useMemo, useState } from "react";
import ApiContext from "./ApiContext";
import ApiService from "../../service/ApiService";

const ApiProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiService = useMemo(
    () => new ApiService("http://api-passion-manga/api"),
    []
  );

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiData = await apiService.getData();
        setData(apiData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [apiService]);

  const showAllDataByPage = useCallback(
    async (endpointTable) => {
      try {
        const tableData = await apiService.fetchAllDataByTable(endpointTable);
        setData(tableData);
      } catch (err) {
        setError(err);
      }
    },
    [apiService]
  );

  const contextValue = useMemo(
    () => ({
      data,
      loading,
      error,
      showAllDataByPage
    }),
    [data, loading, error, showAllDataByPage]
  );

  return (
    <ApiContext.Provider value={contextValue}>
      {console.log({ contextValue })} {/* Debug */}
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;

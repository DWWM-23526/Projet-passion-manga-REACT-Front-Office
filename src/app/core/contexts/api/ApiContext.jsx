/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

//Création contexte
const ApiContext = createContext();
const BASE_URL = 'http://api-passion-manga/api';

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (endpoint) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiContext.Provider value={{data, loading, error, fetchData}}>
      {console.log({ data, loading, error, fetchData })} {/* Debug */}
      {children}
    </ApiContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useApiContext = () => useContext(ApiContext);
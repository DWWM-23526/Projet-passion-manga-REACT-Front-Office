/* eslint-disable react/prop-types */
import { useMemo} from "react";
import ApiContext from "./ApiContext";
import BaseService from "../../service/BaseService";

const ApiProvider = ({ children }) => {

  const baseService = useMemo(() => new BaseService(), []); 


  const contextValue = useMemo(
    () => ({
      baseService
    }),
    [baseService]
  );

  return (
    <ApiContext.Provider value={contextValue}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;

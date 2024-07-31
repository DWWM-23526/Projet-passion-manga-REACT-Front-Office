import { useMemo } from "react";
import ApiContext from "./ApiContext";
import BaseService from "../../service/BaseService";
import PropTypes from "prop-types";

const ApiProvider = ({ children }) => {
  const baseService = useMemo(() => new BaseService(), []);

  const contextValue = useMemo(
    () => ({
      baseService,
    }),
    [baseService]
  );

  return (
    <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>
  );
};

ApiProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default ApiProvider;

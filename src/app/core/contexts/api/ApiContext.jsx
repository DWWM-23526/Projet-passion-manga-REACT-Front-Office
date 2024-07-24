import { createContext } from "react";

//Création contexte
const ApiContext = createContext(
  {
  data : null,
  loading : false,
  error : null,
  showAllDataByPage : () => {},
  }
);

export default ApiContext;
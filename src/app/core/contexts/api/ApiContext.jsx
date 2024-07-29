import { createContext } from "react";

//Création contexte
const ApiContext = createContext(
  {
    BaseService: {}
  }
);

export default ApiContext;
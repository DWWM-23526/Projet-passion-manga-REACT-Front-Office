/* eslint-disable react/prop-types */
import { useMemo} from "react";
import ApiContext from "./ApiContext";
import MangaService from "../../../shared/services/MangaService";
import MangakaService from "../../../shared/services/MangakaService";
import TagService from "../../../shared/services/TagService";
import FavoriteService from "../../../shared/services/FavoriteService";
import BaseService from "../../service/BaseService";

const ApiProvider = ({ children }) => {

  // Init Service

  const mangaService = useMemo(() => new MangaService(), []);

  const mangakaService = useMemo(() => new MangakaService(), []);

  const tagService = useMemo(() => new TagService(), []);

  const favoriteService = useMemo(() => new FavoriteService(), []);

  // Test 
  const baseService = useMemo(() => new BaseService(), []); 


  const contextValue = useMemo(
    () => ({
      mangaService,
      mangakaService,
      tagService,
      favoriteService,
      baseService
    }),
    [favoriteService, mangaService, mangakaService, tagService, baseService]
  );

  return (
    <ApiContext.Provider value={contextValue}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;

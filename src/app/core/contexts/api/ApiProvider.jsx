/* eslint-disable react/prop-types */
import { useMemo} from "react";
import ApiContext from "./ApiContext";
import MangaService from "../../../shared/services/MangaService";
import MangakaService from "../../../shared/services/MangakaService";
import TagService from "../../../shared/services/TagService";
import FavoriteService from "../../../shared/services/FavoriteService";

const ApiProvider = ({ children }) => {

  // Init Service

  const mangaService = useMemo(() => new MangaService(), []);

  const mangakaService = useMemo(() => new MangakaService(), []);

  const tagService = useMemo(() => new TagService(), []);

  const favoriteService = useMemo(() => new FavoriteService(), []);


  const contextValue = useMemo(
    () => ({
      mangaService,
      mangakaService,
      tagService,
      favoriteService
    }),
    [favoriteService, mangaService, mangakaService, tagService]
  );

  return (
    <ApiContext.Provider value={contextValue}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;

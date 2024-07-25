/* eslint-disable react/prop-types */
import { useMemo} from "react";
import ApiContext from "./ApiContext";
import MangaService from "../../../shared/services/MangaService";
import MangakaService from "../../../shared/services/MangakaService";
import TagService from "../../../shared/services/TagService";
import FavoriteService from "../../../shared/services/FavoriteService";

const ApiProvider = ({ children }) => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const mangaService = useMemo(() => new MangaService(), []);

  const mangakaService = useMemo(() => new MangakaService(), []);

  const tagService = useMemo(() => new TagService(), []);

  const favoriteService = useMemo(() => new FavoriteService(), []);

  // useEffect(() => {
  //   const loadData = async () => {
  //     setLoading(true);
  //     setError(null);
  //     try {
  //       const apiData = await baseService.getData();
  //       setData(apiData);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   loadData();
  // }, []);

  // const showAllDataByPage = useCallback(
  //   async (endpointTable) => {
  //     setError("");
  //     setLoading(true);
  //     try {
  //       const tableData = await apiService.fetchAllDataByTable(endpointTable);
  //       setData(tableData);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   },
  //   [apiService]
  // );

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
      {console.log({ contextValue })}
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;

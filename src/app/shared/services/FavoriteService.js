import BaseService from "../../core/service/BaseService";

class FavoriteService extends BaseService {

  endpointTable = "/users/manga/";
  // TODO : Add id user dynamique

  fetchAllDataByTable() {
    super.fetchAllDataDataByTable(this.endpointTable);
  }

}
export default FavoriteService;

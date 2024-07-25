import BaseService from "../../core/service/BaseService";

export default class FavoriteService extends BaseService {

  endpointTable = "/users/manga/";
  // TODO : Add id user dynamique

  fetchAllDataByTable() {
   return super.fetchAllDataByTable(this.endpointTable);
  }

}
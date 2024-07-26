import BaseService from "../../core/service/BaseService";

export default class MangaService extends BaseService{

  endpointTable = "/manga";
  

  fetchAllDataByTable() {
    return super.fetchAllDataByTable(this.endpointTable);
  }

  fetchDataByID(id) {
    return super.fetchDataByID(this.endpointTable, id);
  }
}
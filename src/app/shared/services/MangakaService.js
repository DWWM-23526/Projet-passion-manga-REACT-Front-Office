import BaseService from "../../core/service/BaseService";

export default class MangakaService extends BaseService {
  endpointTable = "/mangaka";

   fetchAllDataByTable() {
    return super.fetchAllDataByTable(this.endpointTable);
  }
}
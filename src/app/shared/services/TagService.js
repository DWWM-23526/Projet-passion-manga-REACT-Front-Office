import BaseService from "../../core/service/BaseService";

export default class TagService extends BaseService {
  endpointTable = "/tags";

  fetchAllDataDataByTable() {
   return super.fetchAllDataByTable(this.endpointTable);
  }
}
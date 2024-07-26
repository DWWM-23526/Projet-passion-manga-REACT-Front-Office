import BaseService from "../../core/service/BaseService";

export default class TagService extends BaseService {
  endpointTable = "/tags";

  fetchAllDataByTable() {
   return super.fetchAllDataByTable(this.endpointTable);
  }
}
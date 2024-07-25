import BaseService from "../../core/service/BaseService";

class TagService extends BaseService {
  endpointTable = "/tags";

  fetchAllDataDataByTable() {
    super.fetchAllDataDataByTable(this.endpointTable);
  }
}
export default TagService;

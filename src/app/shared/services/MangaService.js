import BaseService from "../../core/service/BaseService";

class MangaService extends BaseService{

  endpointTable = "/manga";

  fetchAllDataDataByTable() {
    super.fetchAllDataDataByTable(this.endpointTable);
  }
}

export default MangaService;
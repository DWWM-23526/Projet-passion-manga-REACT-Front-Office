import BaseService from "../../core/service/BaseService";

class MangakaService extends BaseService {
  endpointTable = "/mangaka";

   fetchAllDataDataByTable() {
    super.fetchAllDataDataByTable(this.endpointTable);
  }
}

export default MangakaService;

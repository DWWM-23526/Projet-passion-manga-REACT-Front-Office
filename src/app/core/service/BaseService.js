class BaseService {
  constructor() {
    this.apiUrl = import.meta.env.VITE_BASE_URL;
  }



  async request()



  async getData() {
    try {
      const response = await fetch(`${this.apiUrl}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  }

  async fetchAllDataByTable(endpointTable) {
    try {
      const response = await fetch(`${this.apiUrl}${endpointTable}`);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch all data by table: ${response.statusText}`
        );
      }
      return response.json();
    } catch (error) {
      throw new Error(`Failed to fetch all data by table: ${error.message}`);
    }
  }

  async fetchDataByID(endpointTable, id) {
    try {
      const response = await fetch(`${this.apiUrl}${endpointTable}/${id}`);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch data by id by table: ${response.statusText}`
        );
      }
      return response.json();
    } catch (error) {
      throw new Error(`Failed to fetch data by id by table: ${error.message}`);
    }
  }

  // async fetchDataIsFavoriteByUser(endpointTable, idManga, idUser) {
  //   try {
  //     const response = await fetch(
  //       `${this.dataUrl}${endpointTable}/${idManga}/${idUser}`
  //     );
  //     if (!response.ok) {
  //       throw new Error(
  //         `Failed to fetch data favorite by user: ${response.statusText}`
  //       );
  //     }
  //     return response.json();
  //   } catch (error) {
  //     throw new Error(
  //       `Failed to fetch data favorite by user: ${error.message}`
  //     );
  //   }
  // }
  // TODO : Add different method for use API call
}

export default BaseService;

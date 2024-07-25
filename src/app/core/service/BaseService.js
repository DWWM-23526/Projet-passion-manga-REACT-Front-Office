import baseUrl from "../../../../.env/config/baseUrl";

class BaseService {
  constructor() {
    this.dataUrl = baseUrl;
  }

  async getData() {
    try {
      const response = await fetch(`${this.dataUrl}`);
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
      const response = await fetch(`${this.dataUrl}${endpointTable}`);
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

  // TODO : Add different method for use API call
}

export default BaseService;

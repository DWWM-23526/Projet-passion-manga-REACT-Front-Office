class BaseService {
  constructor() {
    this.apiUrl = import.meta.env.VITE_BASE_URL;
    this.defaultHeaders = {
      "Content-Type": "application/json",
    };
  }

  async _handleRequest({ endpoint, httpMethod, body = null, headers = {} }) {
    try {

      console.log(endpoint);
      return await this.request({ endpoint, httpMethod, body, headers });
    } catch (error) {
      throw new Error(`Failed to execute request: ${error.message}`);
    }
  }

  async request({ endpoint, httpMethod = "GET", body = null, headers = {} }) {
    const url = `${this.apiUrl}${endpoint}`;
    console.log(endpoint);
    console.log(url);
    const options = {
      method: httpMethod,
      headers: { ...this.defaultHeaders, ...headers },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText} - ${errorText}`);
      }

      try {
        return await response.json();
      } catch {
        throw new Error("Response is not in JSON format");
      }
    } catch (error) {
      console.error(`Error in request: ${error.message}`);
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  }

  async fetchData(endpoint, headers = {}) {
    return this.request({ endpoint, headers });
  }
}

export default BaseService;

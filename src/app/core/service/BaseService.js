class BaseService {
  constructor() {
    this.apiUrl = import.meta.env.VITE_BASE_URL;
    this.defaultHeaders = {
      "Content-Type": "application/json",
    };
  }

  async request(endpoint, httpMethod = "GET", body = null, headers = {}) {
    const url = `${this.apiUrl}${endpoint}`;
    
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
        throw new Error(`Failed to fetch data: ${response.statusText} - ${errorText}`);
      }

      return await response.json();
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  }

  async fetchData(endpoint, headers) {
    return this.request(endpoint, "GET", null, headers);
  }
}

export default BaseService;
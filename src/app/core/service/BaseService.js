import { decode } from "html-entities";

class BaseService {
  constructor() {
    this.apiUrl = import.meta.env.VITE_BASE_URL;
    this.defaultHeaders = {
      "Content-Type": "application/json",
    };
  }

 
  _prepareHeaders(headers = {}) {
    const token = this._getAuthToken();
    const authHeader = token ? { authorization: `Bearer ${token}` } : {};
    return { ...this.defaultHeaders, ...headers, ...authHeader };
  }


  _getAuthToken() {
    return localStorage.getItem("authToken");
  }


  async _handleRequest({ endpoint, httpMethod, body = null, headers = {} }) {
    try {
      return await this.request({ endpoint, httpMethod, body, headers });
    } catch (error) {
      throw new Error(`Failed to execute request: ${error.message}`);
    }
  }


  async request({ endpoint, httpMethod = "GET", body = null, headers = {} }) {
    const url = this._buildUrl(endpoint);
    const options = this._buildRequestOptions(httpMethod, body, headers);

    const response = await this._fetchData(url, options);
    return this._parseResponse(response);
  }

 
  _buildUrl(endpoint) {
    return `${this.apiUrl}${endpoint}`;
  }


  _buildRequestOptions(httpMethod, body, headers) {
    const options = {
      method: httpMethod,
      headers: this._prepareHeaders(headers),
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    return options;
  }


  async _fetchData(url, options) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText} - ${errorText}`);
      }
      return response;
    } catch (error) {
      console.error(`Error in request: ${error.message}`);
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  }

  
  async _parseResponse(response) {
    try {
      const jsonResponse = await response.json();
      if (jsonResponse.success) {
        return this._decodeHtmlEntities(jsonResponse.data);
      } else {
        throw new Error(`API Error: ${jsonResponse.message || "Unknown error"}`);
      }
    } catch (error) {
      throw new Error("Response is not in JSON format");
    }
  }

  _decodeHtmlEntities(response) {

    if (typeof response === 'string') {
      return decode(response);
    }
    if (Array.isArray(response)) {
      return response.map(item => this._decodeHtmlEntities(item));
    }
    if (typeof response === 'object' && response !== null) {
      const decodedObject = {};
      Object.keys(response).forEach(key => {
        decodedObject[key] = this._decodeHtmlEntities(response[key]);
      });
      return decodedObject;
    }
    
    return response;
  }

  
  async fetchData(endpoint, headers = {}) {
    return this._handleRequest({ endpoint, headers });
  }
}

export default BaseService;
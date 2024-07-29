import BaseService from "./BaseService";

class AuthService extends BaseService {
 
  constructor() {
    super(); 
  }

  async validateToken() {
    try {

      const token = localStorage.getItem("authToken");

      const headers = {
        "Content-Type": "application/json",
      };

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await this.request(`/validate`, "POST", {token}, headers);
      return response;
      
    } catch (error) {
      throw new Error(`Failed to validate token: ${error.message}`);
    }
  }

  async login(credentials) {
    try {
      localStorage.removeItem("authToken");

      const headers = {
        "Content-Type": "application/json",
      };

      const response = await fetch(`http://api-passion-manga/api/login`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error(`Failed to login: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      throw new Error(`Failed to login: ${error.message}`);
    }
  }
}

export default AuthService;

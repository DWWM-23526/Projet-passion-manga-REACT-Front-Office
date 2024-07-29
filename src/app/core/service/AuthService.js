import BaseService from "./BaseService";

class AuthService extends BaseService {
  

  async validateToken() {
    try {
      const token = localStorage.getItem("authToken");

      const headers = {};

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await this.request(`/validate`, "POST", { token }, headers);
      return response;
    } catch (error) {
      throw new Error(`Failed to validate token: ${error.message}`);
    }
  }

  async login(credentials) {
    try {
      const response = await this.request(`/login`, "POST", credentials); 
      console.log(response);
      return response;
    } catch (error) {
      throw new Error(`Failed to login: ${error.message}`);
    }
  }

 
}

export default AuthService;

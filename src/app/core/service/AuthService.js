class AuthService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async fetchUser(route) {
    try {
      const response = await fetch(this.apiUrl + route);
      if (!response.ok) {
        throw new Error(`Failed to fetch user: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      throw new Error(`Failed to fetch user: ${error.message}`);
    }
  }

  async validateToken() {
    try {

      const token = localStorage.getItem("authToken");

      const headers = {
        "Content-Type": "application/json",
      };

      console.log(token);

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await fetch(`http://api-passion-manga/api/validate`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error(`Failed to validate token: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
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

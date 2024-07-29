import BaseService from "./BaseService";

class AuthService extends BaseService {
  _prepareHeaders(token = null) {
    const headers = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    return headers;
  }

  async validateToken() {
    const token = localStorage.getItem("authToken");
    const headers = this._prepareHeaders(token);

    return this._handleRequest({
      endpoint: "/validate",
      httpMethod: "POST",
      body: { token },
      headers,
    });
  }

  async login(credentials) {
    return this._handleRequest({
      endpoint: "/login",
      httpMethod: "POST",
      body: credentials,
    });
  }
}

export default AuthService;

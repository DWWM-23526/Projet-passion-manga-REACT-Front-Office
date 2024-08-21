import BaseService from "./BaseService";

class AuthService extends BaseService {


  async validateToken(token) {

    const headers = this._prepareHeaders();

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

  async register(credentials) {
    return this._handleRequest({
      endpoint: "/emailConfirm/sendEmailConfirm",
      httpMethod: "POST",
      body: credentials,
    });
  }

}

export default AuthService;

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
      endpoint: "/emailConfirm/sendEmailConfirm", // TODO ADD endpoint to API
      httpMethod: "POST",
      body: credentials,
    });
  }

  async forgottenPassword(credentials) {
    return this._handleRequest({
      endpoint: "/emailConfirm/sendEmailToResetPassword",// TODO ADD endpoint to API
      httpMethod: "POST",
      body: credentials,
    });
  }

  async updatePassword(credentials) {
    return this._handleRequest({
      endpoint: "/emailConfirm/updatePasswordAfterClick",
      httpMethod: "UPDATE",
      body: credentials,
    });
  }

  async checkUser() {
    return this._handleRequest({
      endpoint: "/users",
      httpMethod: "GET",
    });
  }
}

export default AuthService;

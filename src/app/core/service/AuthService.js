class AuthService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async fetchUser() {
    const response = await fetch(this.apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    return response.json();
  }

  // async login(credentials) {
  //   try {
  //     const response = fetch(`http://api-passion-manga/api/users/1`)
  //   } catch (error) {
      
  //   }
  // }
}

export default AuthService;

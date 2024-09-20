import { createContext } from "react";

const AppContext = createContext({
  user: [],
  isAuthenticated: false,
  loading: false,
  error: null,
  title: "title",
  setTitle: () => {},
  login: () => {},
  logout: () => {},
  register: () => {},
  checkUser: () => {},
  forgottenPassword: () => {},
});

export default AppContext;


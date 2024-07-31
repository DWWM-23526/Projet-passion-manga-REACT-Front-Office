import PropTypes from "prop-types";

import { useEffect, useMemo, useState } from "react";
import AuthService from "../../service/AuthService";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("PASSION MANGAS");

  const authService = useMemo(() => new AuthService(), []);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem("authToken");

        if (token) {
          const user = await authService.validateToken(token);

          if (user) {
            setUser(user);
          } else {
            localStorage.removeItem("authToken");
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, [authService]);

  const login = async (credentials) => {
    try {
      const { userData, token } = await authService.login(credentials);

      localStorage.setItem("authToken", token);
      setUser(userData);
    } catch (err) {
      setError(err);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("authToken");
      setUser(null);
    } catch (err) {
      setError(err);
    }
  };

  const contextValue = {
    user,
    isAuthenticated: !!user,
    loading,
    error,
    title,
    setTitle,
    login,
    logout,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default AppProvider;

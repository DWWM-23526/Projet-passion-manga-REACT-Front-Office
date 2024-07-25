/* eslint-disable react/prop-types */

import { useEffect, useMemo, useState } from "react";
import AuthService from "../../service/AuthService";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const authService = useMemo(() => new AuthService("http://api-passion-manga/api"), []);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem("authToken");

        if (token) {
          const user = await authService.validateToken(token);
          console.log(user);

          if (user) {
            setUser(user);
          } else {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } catch (err) {
        console.log(err);
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
      console.log(userData);
    
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
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

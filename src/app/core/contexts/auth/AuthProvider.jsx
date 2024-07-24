/* eslint-disable react/prop-types */

import { useCallback, useEffect, useMemo, useState } from "react";
import AuthService from "../../service/AuthService";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const authService = useMemo(() => new AuthService("http://api-passion-manga/api/users/1"), []);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await authService.fetchUser();
        setUser(userData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [authService]);

  const login = useCallback(async (credentials) => {
    try {
      const userData = await authService.login(credentials);
      setUser(userData);
    } catch (err) {
      setError(err);
    }
  }, [authService]);

  const logout = useCallback(() => {
    try {
     
      setUser(null);
    } catch (err) {
      setError(err);
    }
  });

  const contextValue = useMemo(() => ({
    user,
    isAuthenticated: !!user,
    loading,
    error,
    login,
    logout,
  }), [user, loading, error, login, logout]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
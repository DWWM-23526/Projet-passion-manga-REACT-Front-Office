/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
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
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [authService]);

  const contextValue = useMemo(
    () => ({
      user,
      isAuthenticated: !user,
      loading,
      error,
    }),
    [user, loading, error]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
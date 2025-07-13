import { createContext, useContext, useState, useEffect } from "react";
import { API_ENDPOINTS } from "../config/api";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [rateLimit, setRateLimit] = useState({
    limit: 10,
    used: 0,
    remaining: 10,
  });

  // Fetch rate limit status
  const fetchRateLimit = async (authToken) => {
    const tokenToUse = authToken || token;
    if (!tokenToUse) return;

    try {
      const response = await fetch(API_ENDPOINTS.RATE_LIMIT, {
        headers: {
          Authorization: `Bearer ${tokenToUse}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setRateLimit(data);
        return data;
      }
    } catch (error) {
      console.error("Error fetching rate limit:", error);
    }
  };

  useEffect(() => {
    // Check for stored token on app load
    const storedToken = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("authUser");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      // Fetch rate limit for existing user
      fetchRateLimit(storedToken);
    }
    setIsLoading(false);
  }, []);

  const login = async (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem("authToken", authToken);
    localStorage.setItem("authUser", JSON.stringify(userData));

    // Fetch initial rate limit
    await fetchRateLimit(authToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setRateLimit({ limit: 10, used: 0, remaining: 10 });
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
  };

  const value = {
    user,
    token,
    isLoading,
    rateLimit,
    login,
    logout,
    fetchRateLimit,
    isAuthenticated: !!user && !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

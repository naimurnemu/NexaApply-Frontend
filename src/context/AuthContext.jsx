import publicFetch from "@/utils/fetchPublicAPI";
import privateFetch from "@/utils/fetchPrivateAPI";
import { createContext, useEffect, useState, useMemo } from "react";
import { get } from "react-hook-form";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  /**
   * Register a new user
   * @param {string} name
   * @param {email} email
   * @param {string} password
   */
  const registration = async (name, email, password) => {
    try {
      const data = await publicFetch("/register", "POST", {
        name,
        email,
        password,
      });
      setToken(data.token);
      getProfile();
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  /**
   * Login registered user
   * @param {email} email
   * @param {string} password
   */
  const login = async (url, email, password) => {
    try {
      const data = await publicFetch(url, "POST", { email, password });
      setToken(data.token);
      getProfile();
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  /**
   * Fetch user profile
   * @returns user profile
   */
  const getProfile = async () => {
    try {
      if (!token) return;
      const data = await privateFetch("auth/profile");
      setUser(data.user);
    } catch (error) {
      console.error("Profile fetch error:", error);
    }
  };

 

  const contextValue = useMemo(
    () => ({ user, token, login, registration, getProfile }),
    [user, token]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
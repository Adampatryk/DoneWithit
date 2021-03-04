import { useContext } from "react";
import AuthContext from "./context";
import jwtDecode from "jwt-decode";
import authStorage from "../auth/storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (token) => {
    const user = jwtDecode(token);
    setUser(user);
    authStorage.storeToken(token);
  };

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, login, logout };
};

import { createContext } from "react";

export const AuthContext = createContext({
  isLogginIn: false,
  userId: null,
  login: () => {},
  logout: () => {},
});

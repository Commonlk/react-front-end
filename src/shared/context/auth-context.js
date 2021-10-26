import { createContext } from "react";

export const AuthContext = createContext({
  isLogginIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
});

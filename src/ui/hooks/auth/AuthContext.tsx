import { createContext, useContext } from 'react';

interface ContextProps {
  isLogged: Boolean;

  //Methods
  handleLogin(): void;
  handleLogout(): void;
}

export const AuthContext = createContext({} as ContextProps);

export const UseAuth = () => {
  return useContext(AuthContext);
};

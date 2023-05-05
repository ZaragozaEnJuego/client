import { createContext, useContext } from 'react';
import { Credentials } from '../../../core/auth/domain/model';

interface ContextProps {
  //Methods
  handleLogin(credetials: Credentials): void;
  handleLogout(): void;
  isLogged(): boolean;
}

export const AuthContext = createContext({} as ContextProps);

export const UseAuth = () => {
  return useContext(AuthContext);
};

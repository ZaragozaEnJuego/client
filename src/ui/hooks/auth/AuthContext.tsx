import { createContext, useContext } from 'react';
import { TokenJWT } from '../../../core/auth/domain/model';

interface ContextProps {
  //Methods
  handleLogin(credetials: TokenJWT): void;
  handleLogout(): void;
  isLogged(): boolean;
}

export const AuthContext = createContext({} as ContextProps);

export const UseAuth = () => {
  return useContext(AuthContext);
};

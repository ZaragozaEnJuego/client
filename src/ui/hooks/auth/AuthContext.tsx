/*  Sistemas y Tecnologías Web - Fabra Caro, Francisco
*   Proyecto:                    Zaragoza en Juego 
*   Fichero:                     AuthContext.tsx
*   Desarrolladores:             Aréjula Aísa, Íñigo                  - 785370              
*                                González Martínez de Apellániz, Ibón - 756878
*                                Ruiz Borao, Juan José                - 756640
*                                Penacho, Ismael                      - 774572
*/

import { createContext, useContext } from 'react';
import { Credentials } from '../../../core/auth/domain/model';

interface ContextProps {
  //Methods
  handleLogin(credetials: Credentials): void;
  handleLogout(): void;
  isLogged(): boolean;
  isAdmin(): boolean;
  getUserId(): string | undefined;
}

export const AuthContext = createContext({} as ContextProps);

export const UseAuth = () => {
  return useContext(AuthContext);
};

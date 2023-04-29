import { FC, PropsWithChildren, useState } from 'react';
import { AuthContext } from './AuthContext';
import { TokenJWT } from '../../../core/auth/domain/model';

export interface AuthState {
  credetials: TokenJWT;
}

const AUTH_INITIAL_STATE: AuthState = {
  credetials: {},
};

//TODO: cambiar por un correcto uso, no solo un booleano, sino las credenciales
const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setSate] = useState<AuthState>(AUTH_INITIAL_STATE);
  const handleLogin = (credetials: TokenJWT) => {
    setSate({ ...state, credetials });
  };

  const handleLogout = () => {
    setSate({ ...state, credetials: {} });
  };

  const isLogged = () => {
    return state.credetials.token !== undefined;
  };

  return (
    <AuthContext.Provider value={{ ...state, handleLogin, handleLogout, isLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

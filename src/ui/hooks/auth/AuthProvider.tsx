import { FC, PropsWithChildren, useState } from 'react';
import { AuthContext } from './AuthContext';
import { Credentials } from '../../../core/auth/domain/model';

export interface AuthState {
  credetials: Credentials;
}

const AUTH_INITIAL_STATE: AuthState = {
  credetials: {},
};

//TODO: cambiar por un correcto uso, no solo un booleano, sino las credenciales
const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setSate] = useState<AuthState>(AUTH_INITIAL_STATE);
  const handleLogin = (credetials: Credentials) => {
    setSate({ ...state, credetials });
  };

  const handleLogout = () => {
    setSate({ ...state, credetials: {} });
  };

  const isLogged = () => {
    return state.credetials.token !== undefined;
  };
  const getUserId = () => state.credetials.userId;

  return (
    <AuthContext.Provider value={{ ...state, handleLogin, handleLogout, isLogged, getUserId }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

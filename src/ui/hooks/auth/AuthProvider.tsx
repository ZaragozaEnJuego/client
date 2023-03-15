import { FC, PropsWithChildren, useState } from 'react';
import { AuthContext } from './AuthContext';

export interface AuthState {
  isLogged: Boolean;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLogged: false,
};

//TODO: cambiar por un correcto uso, no solo un booleano, sino las credenciales
const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setSate] = useState<AuthState>(AUTH_INITIAL_STATE);
  const handleLogin = () => {
    setSate({ ...state, isLogged: true });
  };

  const handleLogout = () => {
    setSate({ ...state, isLogged: false });
  };

  return (
    <AuthContext.Provider value={{ ...state, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

/*  Sistemas y Tecnologías Web - Fabra Caro, Francisco
*   Proyecto:                    Zaragoza en Juego 
*   Fichero:                     ProfileButton.tsx
*   Desarrolladores:             Aréjula Aísa, Íñigo                  - 785370              
*                                González Martínez de Apellániz, Ibón - 756878
*                                Ruiz Borao, Juan José                - 756640
*                                Penacho, Ismael                      - 774572
*/

import { useState } from 'react';
import { UseAuth } from '../../hooks/auth/AuthContext';

const ProfileButton = () => {
  const useAuth = UseAuth();
  return (
    <button
      className='h-20 w-20 rounded-full hover:opacity-80 relative '
      onClick={() => {
        useAuth.handleLogout();
      }}
    >
      <p
        className='text-primary font-bold outline-nord0 outline absolute top-0 left-0 w-full h-full 
        flex items-center justify-center hover:bg-red-nord hover:text-hover hover:outline-none
        hover:text-opacity-100 rounded-full '
      >
        Cerrar sesión
      </p>
    </button>
  );
};

export { ProfileButton };

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
      <img
        className='w-full h-full object-cover rounded-full '
        src='https://miro.medium.com/v2/resize:fit:785/0*Ggt-XwliwAO6QURi.jpg'
      />

      <p
        className='text-secondary font-bold  absolute top-0 left-0 w-full h-full 
        flex items-center justify-center hover:bg-red-nord opacity-0 hover:opacity-80 
        text-opacity-0 hover:text-opacity-100 rounded-full '
      >
        Cerrar sesión
      </p>
    </button>
  );
};

export { ProfileButton };

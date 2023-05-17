/*  Sistemas y Tecnologías Web - Fabra Caro, Francisco
*   Proyecto:                    Zaragoza en Juego 
*   Fichero:                     App.tsx
*   Desarrolladores:             Aréjula Aísa, Íñigo                  - 785370              
*                                González Martínez de Apellániz, Ibón - 756878
*                                Ruiz Borao, Juan José                - 756640
*                                Penacho, Ismael                      - 774572
*/

import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AuthProvider } from './ui/hooks/auth/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

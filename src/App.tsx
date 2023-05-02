import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { MainLayout } from './ui/components/layouts';
import { router } from './router';
import { AuthProvider } from './ui/hooks/auth/AuthProvider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

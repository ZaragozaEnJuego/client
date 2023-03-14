import { useState } from 'react';
import { MainLayout } from './ui/components/layouts';

function App() {
  const [count, setCount] = useState(0);

  return (
    <MainLayout>
      <h1 className='text-xl'></h1>
    </MainLayout>
  );
}

export default App;

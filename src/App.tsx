import { useState } from 'react';
import reactLogo from './assets/react.svg';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1 className='text-3xl  font-bold underline'>Hello world!</h1>
      <div className=' flex justify-center'>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={reactLogo} className='logo' alt='Vite logo' />
        </a>
      </div>
    </div>
  );
}

export default App;

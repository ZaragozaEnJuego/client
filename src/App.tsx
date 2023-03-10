import { useState } from 'react';
import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=' flex justify-center'>
      <div className='flex-col'>
        <h1 className='text-3xl  font-bold underline'>Hello world!</h1>
        <div className='flex justify-center mt-10'>
          <a href='https://vitejs.dev' target='_blank'>
            <img src='/vite.svg' className='logo' alt='Vite logo' />
          </a>
          <a href='https://vitejs.dev' target='_blank'>
            <img src={reactLogo} className='logo' alt='Vite logo' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

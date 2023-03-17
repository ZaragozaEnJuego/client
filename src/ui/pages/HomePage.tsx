import { NavLink } from 'react-router-dom';
import { MainLayout } from '../components/layouts';

const HomePage = () => {
  return (
    <MainLayout>
      <div className='w-full h-full flex justify-center items-center pb-40 '>
        <div className='flex flex-col items-center'>
          <h1 className='text-secondary text-4xl font-bold'>HOME</h1>
          <NavLink
            className='bg-secondary rounded-md py-2 px-4 text-nord15 mt-3'
            to={'/propertie/1'}
          >
            Edificio 1
          </NavLink>
        </div>
      </div>
    </MainLayout>
  );
};

export { HomePage };

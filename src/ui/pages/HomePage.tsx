import { MainLayout } from '../components/layouts';

const HomePage = () => {
  return (
    <MainLayout>
      <div className='w-full h-full flex justify-center items-center pb-40 '>
        <h1 className='text-secondary text-4xl font-bold'>HOME</h1>
      </div>
    </MainLayout>
  );
};

export { HomePage };

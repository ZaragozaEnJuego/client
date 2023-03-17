import { useParams } from 'react-router-dom';
import { MainLayout } from '../components/layouts';

const PropertiePage = () => {
  const params = useParams();
  return (
    <MainLayout>
      <div className='w-full h-full flex justify-center items-center pb-40 '>
        <h1 className='text-secondary text-4xl font-bold'>Buiding {params.buildingId}</h1>
      </div>
    </MainLayout>
  );
};

export { PropertiePage };

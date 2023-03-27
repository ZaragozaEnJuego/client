import { NavLink } from 'react-router-dom';
import { IPropertieRepo, Propertie } from '../../core/properties/domain';
import { MemoriePropertieRepo } from '../../infraestructure/memory';
import { MainLayout } from '../components/layouts';
import { useEffect, useState } from 'react';
import { list } from 'postcss';
import { PropertieList } from '../components/ui/propertie';

const HomePage = () => {
  const propertieRepo: IPropertieRepo = new MemoriePropertieRepo();
  const [propertiesList, setPropertiesList] = useState<Propertie[]>([]);

  useEffect(() => {
    propertieRepo.getAllProperties().then((list) => {
      setPropertiesList(list);
    });
  }, []);

  return (
    <MainLayout>
      <div className='w-full h-full flex justify-center items-center pb-40 px-6'>
        <div className='h-full md:w-1/2 px-2 w-full '>
          <PropertieList list={propertiesList} />
        </div>
        <div className=' h-full w-1/2 px-2 collapse md:visible'>
          {/**TODO: reemplazar este div por el mapa */}
          <div className='flex justify-center items-center border-2 rounded-lg border-secondary text-4xl font-bold text-primary h-full w-full'>
            <h1>MAP</h1>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export { HomePage };

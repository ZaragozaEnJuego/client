import { NavLink } from 'react-router-dom';
import { IPropertieRepo, Propertie } from '../../core/properties/domain';
import { MemoriePropertieRepo } from '../../infraestructure/memory';
import { MainLayout } from '../components/layouts';
import { useEffect, useState } from 'react';
import { PropertieList } from '../components/ui/propertie';
import { Mapa } from '../components/ui/Mapa';
import { HttpPropertieRepo } from '../../infraestructure/http/PropertieRepo';

const HomePage = () => {
  const propertieRepo: IPropertieRepo = new HttpPropertieRepo();
  const [propertiesList, setPropertiesList] = useState<Propertie[]>([]);

  useEffect(() => {
    propertieRepo.getAllProperties().then((list) => {
      setPropertiesList(list);
    });
  }, []);

  return (
    <MainLayout>
      <div className='w-full h-full flex justify-center items-center md:pb-40 px-6'>
        <div className='h-full md:w-1/2 px-2 w-full '>
          <PropertieList list={propertiesList} />
        </div>
        <div className=' h-full w-1/2 px-2  collapse md:visible'>
          <Mapa list={propertiesList} />
        </div>
      </div>
    </MainLayout>
  );
};

export { HomePage };

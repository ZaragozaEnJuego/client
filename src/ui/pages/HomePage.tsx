import { NavLink } from 'react-router-dom';
import { IPropertieRepo, Propertie } from '../../core/properties/domain';
import { MemoriePropertieRepo } from '../../infraestructure/memory';
import { MainLayout } from '../components/layouts';
import { useEffect, useState } from 'react';
import { list } from 'postcss';

const HomePage = () => {
  const propertieRepo: IPropertieRepo = new MemoriePropertieRepo();
  const [propertiesList, setPropertiesList] = useState<Propertie[]>([]);

  useEffect(() => {
    console.log('called');

    propertieRepo.getAllProperties().then((list) => {
      setPropertiesList(list);
    });
  }, []);

  return (
    <MainLayout>
      <div className='w-full h-full flex justify-center items-center pb-40 '>
        <div className='flex flex-col items-center'>
          <h1 className='text-secondary text-4xl font-bold'>HOME</h1>

          {propertiesList.map((p, k) => (
            <NavLink
              key={k}
              className='bg-secondary rounded-md py-2 px-4 text-primary font-bold mt-3'
              to={`/propertie/${p.id}`}
            >
              {p.name}
            </NavLink>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export { HomePage };

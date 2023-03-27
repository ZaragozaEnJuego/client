import { SetStateAction, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DefaultPropertie, IPropertieRepo, Propertie } from '../../core/properties/domain';
import { MemoriePropertieRepo } from '../../infraestructure/memory';
import { MainLayout } from '../components/layouts';

const PropertiePage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const propertieRepo: IPropertieRepo = new MemoriePropertieRepo();
  const [propertie, setPropertie] = useState<Propertie>(DefaultPropertie());

  useEffect(() => {
    if(undefined!==params.buildingId){
      propertieRepo.getPropertieById(params.buildingId).then((propertie: Propertie ) => {
        setPropertie(propertie);
      });
    }

  }, []);





  return (
    <MainLayout>
      <div className='w-full h-full flex flex-col justify-center items-center pb-40 '>
        <h1 className='text-secondary text-4xl font-bold'>{propertie.name}</h1>
        <button
          className='font-bold bg-secondary text-primary py-2 px-4 rounded-lg mt-4'
          onClick={() => {
            navigate(-1);
          }}
        >
          Go back
        </button>
      </div>
    </MainLayout>
  );
};

export { PropertiePage };

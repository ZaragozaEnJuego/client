/*  Sistemas y Tecnologías Web - Fabra Caro, Francisco
*   Proyecto:                    Zaragoza en Juego 
*   Fichero:                     HomePage.tsx
*   Desarrolladores:             Aréjula Aísa, Íñigo                  - 785370              
*                                González Martínez de Apellániz, Ibón - 756878
*                                Ruiz Borao, Juan José                - 756640
*                                Penacho, Ismael                      - 774572
*/

import { NavLink } from 'react-router-dom';
import { IPropertieRepo, Propertie } from '../../core/properties/domain';
import { MemoriePropertieRepo } from '../../infraestructure/memory';
import { MainLayout } from '../components/layouts';
import { useEffect, useState } from 'react';
import { PropertieList } from '../components/ui/propertie';
import { Mapa } from '../components/ui/Mapa';
import { HttpPropertieRepo } from '../../infraestructure/http/PropertieRepo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
  const propertieRepo: IPropertieRepo = new HttpPropertieRepo();
  const [propertiesList, setPropertiesList] = useState<Propertie[]>([]);

  useEffect(() => {
    propertieRepo
      .getAllProperties()
      .then((list) => {
        setPropertiesList(list);
      })
      .catch((error) => {
        toast.error('Error al obtener los edificios', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
  }, []);

  return (
    <MainLayout>
      <ToastContainer />
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

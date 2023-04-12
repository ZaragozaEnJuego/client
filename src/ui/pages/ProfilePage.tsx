import { useEffect, useState } from 'react';
import { Landlord } from '../../core/landlord/model';
import { ILandlordRepo } from '../../core/landlord/ports';
import { Propertie } from '../../core/properties/domain';
import { MemorieLandlordRepo } from '../../infraestructure/memory/LandlordRepo';
import { MainLayout } from '../components/layouts';
import { PropertieList } from '../components/ui/propertie';
import { BarChart } from '../components/ui/BarChart';
import { DonutChart } from '../components/ui/DonutChart';

const ProfilePage = () => {
  const landlordRepo: ILandlordRepo = new MemorieLandlordRepo();
  const [landlord, setPropertiesList] = useState<Landlord>({
    liquidity: 0,
    properties: [],
    lastDayIncome: 0,
  });

  useEffect(() => {
    landlordRepo.getLandlordInfo().then((landlord: Landlord) => {
      setPropertiesList(landlord);
    });
  }, []);

  const calcPropertieValue = (properties: Propertie[]): number => {
    var value = 0;
    properties.forEach((propertie) => {
      value += propertie.price;
    });
    return value;
  };

  return (
    <MainLayout>
      <div className='w-full h-full flex pb-4 pr-4'>
        <div className='w-full md:w-1/2 flex flex-col h-full '>
          <div className=' h-1/3 w-full flex  items-center justify-center '>
            <div className='rounded-3xl border-secondary border-2 text-primary font-bold text-4xl p-3 w-full mx-10 h-56 flex flex-col justify-center'>
              <h1>Balance ultimo día: {landlord.lastDayIncome}</h1>
              <h1>Patrimonio: {calcPropertieValue(landlord.properties)}</h1>
              <h1>Liquidez: {landlord.liquidity}</h1>
            </div>
          </div>
          <div className='h-2/3 w-full  flex justify-center items-center '>
            <div className='w-2/3 h-full'>
              <h1 className='text-secondary text-2xl'>
                Propiedades: {landlord.properties.length}{' '}
              </h1>
              <PropertieList list={landlord.properties} size={'small'} />
            </div>
          </div>
        </div>
        <div className='rounded-3xl border-secondary border-2 w-1/2 h-full collapse md:visible'>
          <div className='flex items-center justify-center h-full w-full'>
            <BarChart data={[12, 19, 3, 5, 2, 3]} labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']} />
          </div>
          <div className='flex items-center justify-center h-full w-full'>
            <DonutChart data={[5, 7, 11, 15, 19, 22]} labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export { ProfilePage };

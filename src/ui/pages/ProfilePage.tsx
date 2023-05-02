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
    id: '1',
    name: 'Juan',
    access: true,
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
      <div className='w-full h-full flex md:pb-10 md:pr-4  '>
        <div className='w-full md:w-1/2 flex flex-col h-full '>
          <div className=' md:h-1/3 md:min-h-fit  w-full flex  items-center justify-center '>
            <div className='rounded-3xl border-secondary border-2 text-primary font-bold  text-lg md:text-3xl p-3 w-full mx-4   flex flex-col  items-center justify-center '>
              <h1>Balance ultimo día: {landlord.lastDayIncome}</h1>
              <h1>Patrimonio: {calcPropertieValue(landlord.properties)}</h1>
              <h1>Liquidez: {landlord.liquidity}</h1>
            </div>
          </div>
          <div className=' h-full md:h-2/3 w-full  flex justify-center items-center'>
            <div className='w-2/3 h-full '>
              <h1 className='text-secondary text-2xl'>
                Propiedades: {landlord.properties.length}{' '}
              </h1>
              <PropertieList list={landlord.properties} size={'small'} />
            </div>
          </div>
        </div>
        <div className="rounded-3xl border-secondary border-2 w-1/2 h-full hidden md:inline flex flex-col overflow-auto">
          <div className="flex-shrink-0 w-full flex items-center justify-center h-96 mb-4">
            <BarChart data={[12, 19, 3, 5, 2, 3]} labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']} />
          </div>
          <div className="flex-shrink-0 w-full flex items-center justify-center h-96">
            <DonutChart data={[12, 19, 3, 5, 2, 3]} labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export { ProfilePage };

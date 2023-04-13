import { SetStateAction, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  DefaultPropertie,
  IPropertieRepo,
  KindRestrictions,
  Propertie,
} from '../../core/properties/domain';
import { MemoriePropertieRepo } from '../../infraestructure/memory';
import { chooseColor, PropertieIcon } from '../../utils/kindsSelector';
import { MainLayout } from '../components/layouts';

const PropertiePage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const propertieRepo: IPropertieRepo = new MemoriePropertieRepo();
  const [propertie, setPropertie] = useState<Propertie>(DefaultPropertie());
  const [kindRestrictions, setKindRestrictions] = useState<KindRestrictions>();

  useEffect(() => {
    if (undefined !== params.buildingId) {
      propertieRepo.getPropertieById(params.buildingId).then((propertie: Propertie) => {
        setPropertie(propertie);
      });
    }
  }, []);

  useEffect(() => {
    propertieRepo.getKindRestrictions(propertie.kind).then((restrictions: KindRestrictions) => {
      setKindRestrictions(restrictions);
    });
  }),
    [propertie];

  const divider = () => {
    return <div className='border border-b w-full border-secondary my-1'></div>;
  };

  const descriptionElement = (key: string, value: any) => {
    return (
      <div>
        <h3 className='text-secondary font-bold'>{key}</h3>
        <div className='flex items-center'>
          <div
            style={{ backgroundColor: chooseColor(propertie.kind) }}
            className='w-1 h-5 rounded-full  mr-2'
          />
          <h3 className='text-primary font-bold'>{value}</h3>
        </div>
      </div>
    );
  };

  return (
    <MainLayout>
      <div className='w-full h-5/6 flex   items-center px-6  '>
        <div className='h-full md:w-[600px] md:px-2 w-full flex flex-col  items-center  '>
          {/**Propertie description */}
          <div className='block w-full'>
            <div className='flex ml-16 py-2 '>
              <div className='block'>
                <h1 className='text-4xl text-primary font-bold'>{propertie.name}</h1>
                <h2 className='text-xl text-secondary font-bold'>{propertie.address}</h2>
              </div>
              <div className='mx-10'>{PropertieIcon(propertie.kind)}</div>
            </div>
          </div>
          {/**Propertie info */}
          <div className='w-5/6'>{divider()}</div>
          <div className='w-full'>
            <div className='flex ml-16 py-2  '>
              <div className='block'>
                {descriptionElement('Propietario', propertie.owner)}
                {descriptionElement('Valor de compra', propertie.price)}
              </div>
              <div className='w-20' />
              <div className='block'>
                {descriptionElement('Tipo', propertie.kind)}
                {descriptionElement('Ingresos base', propertie.income)}
              </div>
            </div>
          </div>
          {/**kind stats */}
          <div className='w-5/6'>{divider()}</div>
          <div className='w-full'>
            <div className='flex ml-16 py-2  '>
              <div className='block'>
                <div>
                  <h3 className='text-secondary font-bold'>{'Temperatura'}</h3>
                  <div className='flex items-center'>
                    <div className='w-1 h-10 rounded-full  mr-2 bg-red-nord' />
                    <div className='block'>
                      <h3 className='text-primary font-bold'>
                        {'>' + kindRestrictions?.MaxTemperature.value + 'ºC'}
                      </h3>
                      <h3 className='text-primary font-bold'>
                        {kindRestrictions?.MaxTemperature.modifier + '%'}
                      </h3>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <div className='w-1 h-10 rounded-full  mr-2 bg-nord9' />
                    <div className='block'>
                      <h3 className='text-primary font-bold'>
                        {'<' + kindRestrictions?.MinTemperature.value + 'ºC'}
                      </h3>
                      <h3 className='text-primary font-bold'>
                        {kindRestrictions?.MinTemperature.modifier + '%'}
                      </h3>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className='text-secondary font-bold'>{'Electricidad'}</h3>
                  <div className='flex items-center'>
                    <div className='w-1 h-5 rounded-full  mr-2 bg-orange-nord' />
                    <h3 className='text-primary font-bold'>
                      {kindRestrictions?.EnergyConsumption + 'kwh'}
                    </h3>
                  </div>
                </div>
              </div>
              <div className='w-20' />
              <div className='block'>
                <div>
                  <h3 className='text-secondary font-bold'>{'Clima'}</h3>
                  <div className='flex items-center'>
                    <div className='w-1 h-10 rounded-full  mr-2 bg-yellow-nord' />
                    <div className='block'>
                      <h3 className='text-primary font-bold'>{'Soleado'}</h3>
                      <h3 className='text-primary font-bold'>
                        {kindRestrictions?.Weather.sunny + '%'}
                      </h3>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <div className='w-1 h-10 rounded-full  mr-2 bg-nord8' />
                    <div className='block'>
                      <h3 className='text-primary font-bold'>{'Lluvia'}</h3>
                      <h3 className='text-primary font-bold'>
                        {kindRestrictions?.Weather.rainy + '%'}
                      </h3>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <div className='w-1 h-10 rounded-full  mr-2 bg-nord7' />
                    <div className='block'>
                      <h3 className='text-primary font-bold'>{'Nublado'}</h3>
                      <h3 className='text-primary font-bold'>
                        {kindRestrictions?.Weather.cloudy + '%'}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' h-full w-1/2 px-2 hidden md:block'>
          {/**TODO: reemplazar este div por el grafico */}
          <div className='flex justify-center items-center border-2 rounded-lg border-secondary text-4xl font-bold text-primary h-full w-full'>
            <h1>CHART</h1>
          </div>
        </div>
      </div>

      {/**Buttons */}
      <div className='flex justify-center m-3 '>
        <button
          className='font-bold bg-primary text-secondary py-2 w-52   rounded-full mx-10'
          onClick={() => {
            navigate(-1);
          }}
        >
          Volver
        </button>
        <button
          style={{ backgroundColor: chooseColor(propertie.kind) }}
          className='font-bold  text-secondary py-4 w-52 rounded-full mx-10'
          onClick={() => {
            propertieRepo.buyById(propertie.id);
          }}
        >
          Comprar
        </button>
      </div>
    </MainLayout>
  );
};

export { PropertiePage };
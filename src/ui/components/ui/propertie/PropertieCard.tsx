import { FC } from 'react';
import { Propertie } from '../../../../core/properties/domain';

interface Props {
  propertie: Propertie;
}

const PropertieCard: FC<Props> = ({ propertie }) => {
  return (
    <div className='border-opacity-30 border w-full rounded-lg border-secondary  py-2 px-4 text-primary font-bold mt-3'>
      {propertie.name}
    </div>
  );
};
export { PropertieCard };

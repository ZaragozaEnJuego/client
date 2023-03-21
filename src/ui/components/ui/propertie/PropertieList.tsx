import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Propertie } from '../../../../core/properties/domain';
import { PropertieCard } from './PropertieCard';

interface Props {
  list: Propertie[];
}

const PropertieList: FC<Props> = ({ list }) => {
  return (
    <div className='flex flex-col items-center w-full'>
      {list.map((p, k) => (
        <NavLink className='w-full' key={k} to={`/propertie/${p.id}`}>
          <PropertieCard propertie={p} />
        </NavLink>
      ))}
    </div>
  );
};

export { PropertieList };

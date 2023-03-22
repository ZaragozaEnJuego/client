import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SmallPropertieCard } from '.';
import { Propertie } from '../../../../core/properties/domain';
import { PropertieCard } from './PropertieCard';

type Sizes = 'small' | 'regular';

interface Props {
  list: Propertie[];
  size?: Sizes;
}

const PropertieList: FC<Props> = ({ list, size }) => {
  return (
    <div className='w-full overflow-y-scroll overflow-x-clip pr-2 h-full '>
      {list.map((p, k) => (
        <NavLink className='w-full ' key={k} to={`/propertie/${p.id}`}>
          {size === 'small' ? (
            <SmallPropertieCard propertie={p} />
          ) : (
            <PropertieCard propertie={p} />
          )}
        </NavLink>
      ))}
    </div>
  );
};

export { PropertieList };

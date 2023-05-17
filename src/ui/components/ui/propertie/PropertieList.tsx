/*  Sistemas y Tecnologías Web - Fabra Caro, Francisco
*   Proyecto:                    Zaragoza en Juego 
*   Fichero:                     PropertieList.tsx
*   Desarrolladores:             Aréjula Aísa, Íñigo                  - 785370              
*                                González Martínez de Apellániz, Ibón - 756878
*                                Ruiz Borao, Juan José                - 756640
*                                Penacho, Ismael                      - 774572
*/

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

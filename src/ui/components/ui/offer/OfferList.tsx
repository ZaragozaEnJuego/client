import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Offer } from "/workspaces/client/src/core/negotiations/domain/index";
import { OfferCard } from '.';

interface Offers {
    list: Offer[];
  }

const OfferList: FC<Offers> = ({ list }) => {
    return (
        <div className='w-full overflow-y-scroll overflow-x-clip pr-2 h-full '>
            {list.map((value, index) => (
                <NavLink className='w-full ' key={index} to={`/offer/${value.id}`}>
                    <OfferCard offer={value} />
                </NavLink>
      ))}
        </div>
    );
};

export { OfferList };


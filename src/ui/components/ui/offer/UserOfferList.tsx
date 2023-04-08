import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Offer } from "/workspaces/client/src/core/negotiations/domain/index";
import { UserOfferCard } from '.';

interface Offers {
    list: Offer[];
  }

const UserOfferList: FC<Offers> = ({ list }) => {
    return (
        <div className='w-full overflow-y-scroll overflow-x-clip pr-2 h-full '>
            {list.map((value, index) => (
                <NavLink className='w-full ' key={index} to={`/offer/${value.id}`}>
                    <UserOfferCard offer={value} />
                </NavLink>
      ))}
        </div>
    );
};

export { UserOfferList };


import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Offer } from "/workspaces/client/src/core/negotiations/domain/index";
import { UserOfferCard, SmallUserOfferCard } from '.';

type Sizes = 'small' | 'regular';

interface Offers {
    list: Offer[];
    size?: Sizes;
  }

const UserOfferList: FC<Offers> = ({list, size}) => {
    return (
        <div className='w-full overflow-y-scroll overflow-x-clip pr-2 h-full '>
            {list.map((value, index) => (
                <NavLink className='w-full ' key={index} to={`/offer/${value.id}`}>
                    {size === 'small' ? (<SmallUserOfferCard offer={value} />) : ( <UserOfferCard offer={value} />)}
                </NavLink>
      ))}
        </div>
    );
};

export { UserOfferList };


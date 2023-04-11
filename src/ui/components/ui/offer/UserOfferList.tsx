import { FC } from 'react';
import { UserOfferCard } from '.';
import { Offer } from '../../../../core/negotiations/domain';

interface Offers {
    list: Offer[];
  }

const UserOfferList: FC<Offers> = ({ list }) => {
    return (
        <div className='w-full overflow-y-scroll overflow-x-clip pr-2 h-full '>
            {list.map((value, index) => (<UserOfferCard offer={value}/>))}
        </div>
    );
};

export { UserOfferList };


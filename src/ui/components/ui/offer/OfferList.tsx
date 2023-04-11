import { FC } from 'react';
import { OfferCard } from '.';
import { Offer } from '../../../../core/negotiations/domain';

interface Offers {
    list: Offer[];
  }

const OfferList: FC<Offers> = ({ list }) => {
    return (
        <div className='w-full overflow-y-scroll overflow-x-clip pr-2 h-full '>
            {list.map((value, index) => (<OfferCard offer={value} />))}
        </div>
    );
};

export { OfferList };


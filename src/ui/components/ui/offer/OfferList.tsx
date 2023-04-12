import { FC } from 'react';
import { OfferCard, SmallOfferCard } from '.';
import { Offer } from '../../../../core/negotiations/domain';

type Size = 'small' | 'regular'

interface Offers {
    list: Offer[];
    size?: Size
  }

const OfferList: FC<Offers> = ({ list, size }) => {
    return (
        <div className='w-full overflow-y-scroll overflow-x-clip pr-2 h-full'>
        {size === 'small' ? (
            list.map((value, index) => (
                <SmallOfferCard offer={value} />))
        ) : (
            list.map((value, index) => (
                <OfferCard offer={value} />))
        )}
        </div>
    );
};

export { OfferList };


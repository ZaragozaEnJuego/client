import { FC } from 'react'
import { OfferCard, SmallOfferCard } from '.'
import { Offer } from '../../../../core/negotiations/domain'
//import { HTTPAdminRepo } from '../../../../infraestructure/http/AdminRepo'

type Size = 'small' | 'regular'

interface Offers {
    list: Offer[];
    size?: Size
  }

const userRepo: HTTPAdminRepo = new HTTPAdminRepo()

const OfferList: FC<Offers> = ({ list, size }) => {
    return (
        <div className='w-full overflow-y-scroll overflow-x-clip pr-2 h-full'>
        {size === 'small' ? (
            list.map((value, index) => (
                <SmallOfferCard offer={value} />))
        ) : (
            list.map((value, index) => (
                <OfferCard offer={value} offerer={userRepo.getUser(value.offerer)} owner={userRepo.getUser(value.owner)} />))
        )}
        </div>
    );
};

export { OfferList };


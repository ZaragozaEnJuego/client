import { FC } from 'react'
import { UserOfferCard, SmallUserOfferCard } from '.'
import { Offer } from '../../../../core/negotiations/domain'
//import { HTTPAdminRepo } from '../../../../infraestructure/http/AdminRepo'

type Size = 'small' | 'regular'

interface Offers {
    list: Offer[],
    size?: Size
  }

const userRepo: HTTPAdminRepo = new HTTPAdminRepo()

const UserOfferList: FC<Offers> = ({ list, size }) => {
    return (
        <div className='w-full overflow-y-scroll overflow-x-clip pr-2 h-full'>
        {size === 'small' ? (
            list.map((value) => (<SmallUserOfferCard offer={value} />)))
             : (list.map((value) => (<UserOfferCard offer={value} offerer={userRepo.getUser(value.offerer)} owner={userRepo.getUser(value.owner)} />))
        )}
        </div>
    );
};

export { UserOfferList };


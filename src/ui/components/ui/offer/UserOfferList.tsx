import { FC, useEffect, useState } from 'react';
import { UserOfferCard, SmallUserOfferCard } from '.';
import { Offer } from '../../../../core/negotiations/domain';
import { HTTPAdminRepo } from '../../../../infraestructure/http/AdminRepo';
import { useParams } from 'react-router-dom';
import { User, defaultUser } from '../../../../core/admin/domain';
import { toast } from 'react-toastify';
import { HttpPropertieRepo } from '../../../../infraestructure/http/PropertieRepo';
import { DefaultPropertie, IPropertieRepo, Propertie } from '../../../../core/properties/domain';
import { UseAuth } from '../../../hooks/auth/AuthContext';

type Size = 'small' | 'regular'

interface Offers {
    list: Offer[],
    size?: Size,
    owner: User
  }

const UserOfferList: FC<Offers> = ({ list, size, owner }) => {
    return (
        <div className='w-full overflow-y-scroll overflow-x-clip pr-2 h-full'>
        {size === 'small' ? (
            list.map((value) => (<SmallUserOfferCard offer={value} />)))
             : (list.map((value) => (<UserOfferCard offer={value} owner={owner} />))
        )}
        </div>
    );
};

export { UserOfferList };


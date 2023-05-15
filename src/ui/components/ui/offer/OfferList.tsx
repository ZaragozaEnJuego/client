import { FC, useEffect, useState } from 'react';
import { OfferCard, SmallOfferCard } from '.';
import { Offer } from '../../../../core/negotiations/domain';
import { useParams } from 'react-router-dom';
import { HTTPAdminRepo } from '../../../../infraestructure/http/AdminRepo';
import { toast } from 'react-toastify';
import { User } from '../../../../core/admin/domain';
import { Propertie, DefaultPropertie, IPropertieRepo } from '../../../../core/properties/domain';
import { HttpPropertieRepo } from '../../../../infraestructure/http/PropertieRepo';
import { UseAuth } from '../../../hooks/auth/AuthContext';

type Size = 'small' | 'regular'

interface Offers {
    list: Offer[];
    size?: Size,
    offerer: User
  }

const OfferList: FC<Offers> = ({ list, size, offerer }) => {

    return (
        <div className='w-full overflow-y-scroll overflow-x-clip pr-2 h-full'>
        {size === 'small' ? (
            list.map((value, index) => (
                <SmallOfferCard offer={value} />))
        ) : (
            list.map((value, index) => (
                <OfferCard offer={value} offerer={offerer} />))
        )}
        </div>
    );
};

export { OfferList };


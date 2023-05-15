import { FC, useEffect, useState } from 'react';
import { OfferCard, SmallOfferCard } from '.';
import { Offer } from '../../../../core/negotiations/domain';
import { useParams } from 'react-router-dom';
import { HTTPAdminRepo } from '../../../../infraestructure/http/AdminRepo';
import { toast } from 'react-toastify';
import { User, defaultUser } from '../../../../core/admin/domain';
import { Propertie, DefaultPropertie, IPropertieRepo } from '../../../../core/properties/domain';
import { HttpPropertieRepo } from '../../../../infraestructure/http/PropertieRepo';
import { UseAuth } from '../../../hooks/auth/AuthContext';

type Size = 'small' | 'regular'

interface Offers {
    list: Offer[];
    size?: Size
  }

const OfferList: FC<Offers> = ({ list, size }) => {
    const params = useParams()
    const useAuth = UseAuth()
    const userId = useAuth.getUserId()
    console.log(userId)
    const userRepo: HTTPAdminRepo = new HTTPAdminRepo()
    const propertyRepo: IPropertieRepo = new HttpPropertieRepo()
    const [ offerer, setOfferer ] = useState<User>(defaultUser())
    const [ property, setProperty ] = useState<Propertie>(DefaultPropertie())

    useEffect(() => {
        if (userId !== undefined) {
            try {
                userRepo.getUser(userId).then((offerer: User) => {
                    console.log(offerer)
                    setOfferer(offerer)
                })
            } catch (error) {
                toast.error('Error al obtener datos del oferente', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
              })
        }
    }
})

    useEffect(() => {
        if (params.buildingId !== undefined) {
            try {
                propertyRepo.getPropertieById(params.buildingId).then((property: Propertie) => {
                    setProperty(property)
                })
            } catch (error) {
                toast.error('Error al obtener datos de la propiedad', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                })
            }
        }
    })
    return (
        <div className='w-full overflow-y-scroll overflow-x-clip pr-2 h-full'>
        {size === 'small' ? (
            list.map((value, index) => (
                <SmallOfferCard offer={value} />))
        ) : (
            list.map((value, index) => (
                <OfferCard offer={value} offerer={offerer} property={property} />))
        )}
        </div>
    );
};

export { OfferList };


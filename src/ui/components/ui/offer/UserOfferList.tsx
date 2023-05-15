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
    size?: Size
  }

const UserOfferList: FC<Offers> = ({ list, size }) => {
    const params = useParams()
    const useAuth = UseAuth()
    const userId = useAuth.getUserId()
    console.log(userId)
    const userRepo: HTTPAdminRepo = new HTTPAdminRepo()
    const propertyRepo: IPropertieRepo = new HttpPropertieRepo()
    const [ property, setProperty ] = useState<Propertie>(DefaultPropertie())
    const [ owner, setOwner ] = useState<User>(defaultUser())

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

        useEffect(() => {
            if (userId !== undefined) {
                try {
                    userRepo.getUser(userId).then((owner: User) => {
                        setOwner(owner)
                    })
                } catch (error) {
                    toast.error('Error al obtener datos del propietario', {
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
            list.map((value) => (<SmallUserOfferCard offer={value} />)))
             : (list.map((value) => (<UserOfferCard offer={value} owner={owner} property={property} />))
        )}
        </div>
    );
};

export { UserOfferList };


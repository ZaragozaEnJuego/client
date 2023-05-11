import { FC, useEffect, useState } from 'react'
import { UserOfferCard, SmallUserOfferCard } from '.'
import { Offer } from '../../../../core/negotiations/domain'
import { HTTPAdminRepo } from '../../../../infraestructure/http/AdminRepo'
import { User, defaultUser } from '../../../../core/admin/domain'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

type Size = 'small' | 'regular'

interface Offers {
    list: Offer[],
    size?: Size
  }

const params = useParams()
const userRepo: HTTPAdminRepo = new HTTPAdminRepo()
const [ offerer, setOfferer ] = useState<User>(defaultUser())
const [ owner, setOwner ] = useState<User>(defaultUser())

useEffect(() => {
    if (params.buildingId !== undefined) {
        try {
            userRepo.getUser(params.buildingId).then((offerer: User) => {
                console.log(offerer)
                setOfferer(offerer)
            })
        } catch (error) {
            toast('Error al obtener datos del oferente', {
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
            userRepo.getUser(params.buildingId).then((owner: User) => {
                console.log(owner)
                setOwner(owner)
            })
        } catch (error) {
            toast('Error al obtener datos del propietario', {
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

const UserOfferList: FC<Offers> = ({ list, size }) => {
    return (
        <div className='w-full overflow-y-scroll overflow-x-clip pr-2 h-full'>
        {size === 'small' ? (
            list.map((value) => (<SmallUserOfferCard offer={value} />)))
             : (list.map((value) => (<UserOfferCard offer={value} offerer={offerer} owner={owner} />))
        )}
        </div>
    );
};

export { UserOfferList };


/*  Sistemas y Tecnologías Web - Fabra Caro, Francisco
*   Proyecto:                    Zaragoza en Juego 
*   Fichero:                     UserList.tsx
*   Desarrolladores:             Aréjula Aísa, Íñigo                  - 785370              
*                                González Martínez de Apellániz, Ibón - 756878
*                                Ruiz Borao, Juan José                - 756640
*                                Penacho, Ismael                      - 774572
*/

import { FC } from 'react';
import { UserCard } from '.';
import { User } from '../../../../core/admin/domain';
import { UseAuth } from '../../../hooks/auth/AuthContext';

interface Users {
    list: User[];
}

const UserList: FC<Users> = ({ list }) => {
    const auth = UseAuth()
    const adminId = auth.getUserId()

    return (
        <div className='w-full overflow-y-scroll overflow-x-clip pr-2 h-full '>
            {list.map((value) => value._id === adminId ? null : (<UserCard user={value}/>))}
        </div>
    );
}

export { UserList }
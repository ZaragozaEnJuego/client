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
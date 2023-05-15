import { FC } from 'react';
import { UserCard } from '.';
import { User } from '../../../../core/admin/domain';

interface Users {
    list: User[];
}

const UserList: FC<Users> = ({ list }) => {
    return (
        <div className='w-full overflow-y-scroll overflow-x-clip pr-2 h-full '>
            {list.map((value) => (<UserCard user={value} />))}
        </div>
    );
}

export { UserList }
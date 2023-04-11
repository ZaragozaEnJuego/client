import { FC } from 'react';
import { UserCard } from '.';
import { Landlord } from '../../../../core/landlord/model';

interface Users {
    list: Landlord[];
}

const UserList: FC<Users> = ({ list }) => {
    return (
        <div className='w-full overflow-y-scroll overflow-x-clip pr-2 h-full '>
            {list.map((value, index) => (<UserCard user={value} />))}
        </div>
    );
}

export { UserList }
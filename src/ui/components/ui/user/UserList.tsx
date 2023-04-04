import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { User } from "/workspaces/client/src/core/user/domain/index";
import { UserCard } from '.';

interface Users {
    list: User[];
}

const UserList: FC<Users> = ({ list }) => {
    return (
        <div className='w-full overflow-y-scroll overflow-x-clip pr-2 h-full '>
            {list.map((value, index) => (
                <NavLink className='w-full ' key={index} to={`/offer/${value.id}`}>
                    <UserCard user={value} />
                </NavLink>
            ))}
        </div>
    );
};

export { UserList };
import { FC } from 'react';
import { Landlord, Access } from '../../../../core/landlord/model';

interface Users {
    user: Landlord;
}

const chooseColor = (access: Access): string => {
    switch (access) {
      case 'Active':
        return '#bf616a';
  
      case 'Blocked':
        return '#a3be8c';
  
      default:
        return '#D8DEE9';
    }
  };

const UserCard: FC<Users> = ({ user }) => {
    return (
        <div className=' flex flex-col2 justify-between items-center border border-nord4 w-full rounded-3xl  py-2 px-4  mt-3 h-36'>
            <div className='flex flex-col justify-center items-center '>
                <img className='w-12 h-12 object-cover rounded-full' src={user.icon}/>
                <h1 className='text-sm text-nord1 items-center justify-center' >{user.name}</h1>
                <h1 className=' text-secondary text-sm' >{user.access}</h1>
            </div>
            <div className='text-sm justify-end items-end'>
                <button style={{background: chooseColor(user.access)}} className=' text-primary rounded-lg px-5 py-5'
                    onClick={() => {
                        alert('Cambio de modo');
                        user.access === 'Active' ?  user.access = 'Blocked' : user.access = 'Active';
                    }}>
                    {user.access === 'Blocked' ? (
                        <p>Activar</p>
                    ) : (
                        <p className='text-hover'>Desactivar</p>
                    )}
                </button>
            </div>
        </div>
    )
}

export { UserCard };
import { FC } from 'react';
import { User, Access } from '../../../../core/user/domain';

interface Users {
    user: User;
}

const chooseColor = (access: Access): string => {
    switch (access) {
      case 'Activado':
        return '#bf616a';
  
      case 'Desactivado':
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
                        user.access === 'Activado' ?  user.access = 'Desactivado' : user.access = 'Activado';
                    }}>
                    {user.access === 'Desactivado' ? (
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
import { FC } from 'react';
import { Landlord } from '../../../../core/landlord/model';
import { ReactComponent as UndefinedIcon } from '/src/assets/undefined-icon.svg';

interface Users {
    user: Landlord;
}

const chooseColor = (access: boolean): string => { return access ? '#bf616a' : '#a3be8c' }

const UserCard: FC<Users> = ({ user }) => {
    return (
        <div className=' flex flex-col2 justify-between items-center border border-nord4 w-full rounded-3xl  py-2 px-4  mt-3 h-36'>
            <div className='flex flex-col justify-center items-center '>
                <UndefinedIcon style={{ fill: '#D8DEE9' }} className='w-10 h-10 object-cover rounded-full'/>
                <h1 className='text-sm text-nord1 items-center justify-center' >{user.name}</h1>
                <h1 className=' text-secondary text-sm' >{user.access}</h1>
            </div>
            <div className='text-sm justify-end items-end'>
                <button style={{background: chooseColor(user.access)}} className='text-xs text-primary rounded-md px-3 py-5'
                    onClick={() => {
                        alert('Cambio de modo');
                        user.access === true ?  user.access = false : user.access = true;
                    }}>
                    {user.access === false ? (
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
import { FC } from 'react';
import { IUserRepo, User } from '../../../../core/admin/domain';
import { ReactComponent as UndefinedIcon } from '/src/assets/undefined-icon.svg';
import { HTTPAdminRepo } from '../../../../infraestructure/http/AdminRepo';

interface Users {
    user: User;
}

const chooseColor = (access: boolean): string => { return access ? '#bf616a' : '#a3be8c' }
const chooseText = (access: boolean): string => { return access ? 'Activo' : 'Bloqueado' }
const adminRepo: IUserRepo = new HTTPAdminRepo()

const UserCard: FC<Users> = ({ user }) => {
    return (
        <div className=' flex flex-col2 justify-between items-center border border-nord4 w-full rounded-3xl  py-2 px-4  mt-3 h-36'>
            <div className='flex flex-col justify-center items-center '>
                <UndefinedIcon style={{ fill: '#D8DEE9' }} className='w-10 h-10 object-cover rounded-full'/>
                <h1 className='text-sm text-nord1 items-center justify-center' >{user.name}</h1>
                <h1 className=' text-secondary text-sm' >{chooseText(user.access)}</h1>
            </div>
            <div className='text-sm justify-end items-end'>
                <button style={{background: chooseColor(user.access)}} className='text-xs text-hover rounded-md px-3 py-5'
                    onClick={() => {
                        user.access === true ? adminRepo.updateAccess(user._id, false) : adminRepo.updateAccess(user._id, true)
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
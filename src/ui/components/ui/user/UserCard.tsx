import { FC, useState } from 'react';
import { IUserRepo, User } from '../../../../core/admin/domain';
import { ReactComponent as UndefinedIcon } from '/src/assets/undefined-icon.svg';
import { HTTPAdminRepo } from '../../../../infraestructure/http/AdminRepo';

interface Users {
    user: User;
}

const chooseColor = (access: boolean): string => { return access === true || access === undefined ? '#bf616a' : '#a3be8c' }
const chooseText = (access: boolean): string => { return access === true || access === undefined ? 'Activo' : 'Bloqueado' }
const chooseTextColor = (access: boolean): string => { return access === true || access === undefined ? '#eceff4' : '#2E3440' }
const chooseButtonText = (access: boolean): string => { return access === true || access === undefined ? 'Bloquear' : 'Activar'}
const adminRepo: IUserRepo = new HTTPAdminRepo()

const UserCard: FC<Users> = ({ user }) => {
    const [text, setText] = useState<string>(chooseText(user.access))
    const [textColor, setTextColor] = useState<string>(chooseTextColor(user.access))
    const [color, setColor] = useState<string>(chooseColor(user.access))
    const [btnText, setBtnText] = useState<string>(chooseButtonText(user.access))
    const [userAccess, setUserAccess] = useState<boolean>(user.access)

    const handleAccessChange = (access: boolean) => {
        adminRepo.updateAccess(user._id, access).then(() => {
            setColor(chooseColor(access))
            setText(chooseText(access))
            setTextColor(chooseTextColor(access))
            setBtnText(chooseButtonText(access))
            setUserAccess(access)
        }).catch((error) => console.log(error))

    }

    return (
        <div className=' flex flex-col2 justify-between items-center border border-nord4 w-full rounded-3xl  py-2 px-4  mt-3 h-36'>
            <div className='flex flex-col justify-center items-center '>
                <UndefinedIcon style={{ fill: '#D8DEE9' }} className='w-10 h-10 object-cover rounded-full'/>
                <h1 className='text-sm text-nord1 items-center justify-center' >{user.mail}</h1>
                <h1 className=' text-secondary text-sm' >{text}</h1>
            </div>
            <div className='text-sm justify-end items-end'>
                <button style={{background: color, color: textColor}} className='text-xs text-primary rounded-md px-3 py-5'
                    onClick={() => {userAccess === true ? handleAccessChange(false) : handleAccessChange(true)}}>
                    <p>{btnText}</p>
                </button>
            </div>
        </div>
    )
}

export { UserCard };
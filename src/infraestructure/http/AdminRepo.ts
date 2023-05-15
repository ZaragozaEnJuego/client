import axios from './http'
import { User } from '../../core/admin/domain'
import { stringify } from 'querystring';

export class HTTPAdminRepo {
    async getUserList(): Promise<User[]> {
        interface UserDTO {
            _id: string,
            name: string,
            icon?: string,
            mail?: string,
            access: boolean
        }
        try {
            const response = await axios.get<UserDTO[]>('/admin', {
                headers: {
                    accept: 'application/json',
                },
            });
            if (response.status === 200) {
                return response.data.map((userDTO => {
                    const user: User = {
                        _id: userDTO._id,
                        name: userDTO.name,
                        icon: userDTO.icon,
                        mail: userDTO.mail,
                        access: userDTO.access
                    }
                    return user
                }))
            } else {
                throw new Error(`Error al obtener la lista de usuarios: ${response.status} - ${response.data}`);
            }
        } catch (error: any) {
            throw new Error(`Error al obtener la lista de usuarios: ${error.message}`);
        }
    }
    
    async getUser(id: string): Promise<User> {
        interface UserDTO {
            _id: string,
            name: string,
            icon?: string,
            mail?: string,
            access: boolean
        }
        const response = await axios.get<UserDTO>(`/users/${id}`, {
            headers: {
                accept: 'application/json'
            }
        })
        if (response.status !== 200) {
            throw new Error('Error al obtener el usuario');
        }
        const userRespose = response.data
        const user: User = {
            _id: userRespose._id,
            name: userRespose.name,
            icon: userRespose.icon,
            mail: userRespose.mail,
            access: userRespose.access
        }
        console.log(user)
        return user
    }
    async updateAccess(id: string, access: boolean): Promise<string> {
        const response = await axios.patch<{ id: string }>(`/admin/${id}/access`, {
            access: access
        })
        if (response.status !== 200) {
            throw new Error('Error al actualizar el acceso al usuario')
          }
        console.log(response.data)
        return response.data.id
    }
}

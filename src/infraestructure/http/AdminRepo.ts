import axios from './http'
import { User } from '../../core/admin/domain'

export class HTTPAdminRepo {
    async getUserList(): Promise<User[]> {
        interface UserDTO {
            id: string,
            name: string,
            icon?: string,
            access: boolean
        }
        const response = await axios.get<UserDTO[]>('/admin', {
            headers: {
                accept: 'application/json',
            },
        });
        if (response.status !== 200) {
            throw new Error('Error al obtener la lista de usuarios');
        }
        console.log(response.data);
        return response.data.map((userDTO => {
            const user: User = {
                id: userDTO.id,
                name: userDTO.name,
                icon: userDTO.icon,
                access: userDTO.access
            }
            return user
        }))
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

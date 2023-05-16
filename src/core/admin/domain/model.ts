import { Kind } from "../../properties/domain";

export type User = {
    _id: string,
    name: string,
    icon?: string,
    access: boolean
}

export const defaultUser = (): User => {
    return {
        _id: '',
        name: '',
        icon: '',
        access: true
    }
}
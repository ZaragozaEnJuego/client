import { Kind } from "../../properties/domain";

export type User = {
    _id: string,
    name: string,
    icon?: string,
    mail: string,
    access: boolean
}

export const defaultUser = (): User => {
    return {
        _id: '',
        name: '',
        icon: '',
        mail: '',
        access: true
    }
}

export type UnitsPerDay = {
    date: string,
    count: number,
}
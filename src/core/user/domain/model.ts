export type Access = 'Activado' | 'Desactivado'

export type User = {
    id: number;
    name: string;
    icon: string;
    access: Access;
}
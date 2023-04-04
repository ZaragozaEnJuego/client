import { User } from '../../core/user/domain';

export class MemoryUserRepo {
    list: User[] = [
        {
            id: 1,
            name: 'Lucía',
            icon: 'https://media.istockphoto.com/id/1151155288/es/foto/close-up-foto-incre%C3%ADble-hermosa-ella-sus-dedos-pulgar-de-la-dama-indican-directamente-pecho.jpg?s=612x612&w=0&k=20&c=NCuogVJLvUYYfMihKzWPAl7OPRQSsQsyWFKi6fyuty4=',
            access: 'Activado',
        },
        {
            id: 2,
            name: 'Andrés',
            icon: 'https://media.istockphoto.com/id/1151155288/es/foto/close-up-foto-incre%C3%ADble-hermosa-ella-sus-dedos-pulgar-de-la-dama-indican-directamente-pecho.jpg?s=612x612&w=0&k=20&c=NCuogVJLvUYYfMihKzWPAl7OPRQSsQsyWFKi6fyuty4=',
            access: 'Activado',
        },
        {
            id: 3,
            name: 'Juan',
            icon: 'https://media.istockphoto.com/id/1151155288/es/foto/close-up-foto-incre%C3%ADble-hermosa-ella-sus-dedos-pulgar-de-la-dama-indican-directamente-pecho.jpg?s=612x612&w=0&k=20&c=NCuogVJLvUYYfMihKzWPAl7OPRQSsQsyWFKi6fyuty4=',
            access: 'Desactivado',
        },
        {
            id: 4,
            name: 'Andrea',
            icon: 'https://media.istockphoto.com/id/1151155288/es/foto/close-up-foto-incre%C3%ADble-hermosa-ella-sus-dedos-pulgar-de-la-dama-indican-directamente-pecho.jpg?s=612x612&w=0&k=20&c=NCuogVJLvUYYfMihKzWPAl7OPRQSsQsyWFKi6fyuty4=',
            access: 'Desactivado',
        },
    ];

    getAllUsers(): Promise<User[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
              resolve(this.list);
            }, 100);
          });
    }
}
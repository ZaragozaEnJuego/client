import { Landlord } from '../../core/landlord/model';

export class MemoryUserRepo {
    list: Landlord[] = [
        {
            id: '1',
            name: 'Lucía',
            icon: 'https://media.istockphoto.com/id/1151155288/es/foto/close-up-foto-incre%C3%ADble-hermosa-ella-sus-dedos-pulgar-de-la-dama-indican-directamente-pecho.jpg?s=612x612&w=0&k=20&c=NCuogVJLvUYYfMihKzWPAl7OPRQSsQsyWFKi6fyuty4=',
            access: true,
            liquidity: 1000,
            properties: [],
            lastDayIncome: 1000000000,
        },
        {
            id: '2',
            name: 'Andrés',
            icon: 'https://media.istockphoto.com/id/1151155288/es/foto/close-up-foto-incre%C3%ADble-hermosa-ella-sus-dedos-pulgar-de-la-dama-indican-directamente-pecho.jpg?s=612x612&w=0&k=20&c=NCuogVJLvUYYfMihKzWPAl7OPRQSsQsyWFKi6fyuty4=',
            access: true,
            liquidity: 1000,
            properties: [],
            lastDayIncome: 1000000000,
        },
        {
            id: '3',
            name: 'Juan',
            icon: 'https://media.istockphoto.com/id/1151155288/es/foto/close-up-foto-incre%C3%ADble-hermosa-ella-sus-dedos-pulgar-de-la-dama-indican-directamente-pecho.jpg?s=612x612&w=0&k=20&c=NCuogVJLvUYYfMihKzWPAl7OPRQSsQsyWFKi6fyuty4=',
            access: false,
            liquidity: 1000,
            properties: [],
            lastDayIncome: 1000000000,
        },
        {
            id: '4',
            name: 'Andrea',
            icon: 'https://media.istockphoto.com/id/1151155288/es/foto/close-up-foto-incre%C3%ADble-hermosa-ella-sus-dedos-pulgar-de-la-dama-indican-directamente-pecho.jpg?s=612x612&w=0&k=20&c=NCuogVJLvUYYfMihKzWPAl7OPRQSsQsyWFKi6fyuty4=',
            access: false,
            liquidity: 1000,
            properties: [],
            lastDayIncome: 1000000000,
        },
    ];

    getAllUsers(): Promise<Landlord[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
              resolve(this.list);
            }, 100);
          });
    }
}
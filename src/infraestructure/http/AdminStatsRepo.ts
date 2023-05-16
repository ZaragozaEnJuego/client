import { UnitsPerDay } from '../../core/admin/domain';
import axios from './http'

interface UnitsPerDayDTO {
    date: string,
    count: number
}

export class HTTPAdminStatsRepo {
    async getTransactionsPerDay(): Promise<UnitsPerDay[]> {
        try {
            const response = await axios.get<UnitsPerDayDTO[]>('admin/stats/transactionsPerDay', {
                headers: {
                    accept: 'application/json'
                }
            })
            return response.data.map((unitsDTO => {
                const transactionPerDay: UnitsPerDay = {
                    date: unitsDTO.date,
                    count: unitsDTO.count
                }
                return transactionPerDay
            }))
        } catch (error: any) {
            throw new Error(`Error al obtener las estadísticas: ${error.message}`);
        }

    }

    async getNewUsersPerDay(): Promise<UnitsPerDay[]> {
        try {
            const response = await axios.get<UnitsPerDayDTO[]>('admin/stats/newUsers', {
                headers: {
                    accept: 'application/json'
                }
            })
            return response.data.map((unitsDTO => {
                const newUserPerDay: UnitsPerDay = {
                    date: unitsDTO.date,
                    count: unitsDTO.count
                }
                return newUserPerDay
            }))
        } catch (error: any) {
            throw new Error(`Error al obtener las estadísticas: ${error.message}`);
        }
    }
}
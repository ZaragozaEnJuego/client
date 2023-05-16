import { useEffect, useState } from 'react';
import { AdminLayout } from '../components/layouts';
import { BarChart, DonutChart, LineChart, UserList } from '../components/ui/user';
import { IAdminStatsRepo, IUserRepo, UnitsPerDay, User } from '../../core/admin/domain';
import { HTTPAdminRepo } from '../../infraestructure/http/AdminRepo';
import { HTTPAdminStatsRepo } from '../../infraestructure/http/AdminStatsRepo';

const AdminPage = () => {
  const userRepo: IUserRepo = new HTTPAdminRepo();
  const statsRepo: IAdminStatsRepo = new HTTPAdminStatsRepo()
  const [userList, setUsersList] = useState<User[]>([]);
  const [transactions, setTransactions] = useState<number[]>([])
  const [newUsers, setNewUsers] = useState<number[]>([])
  const [transactionsDates, setTransactionsDates] = useState<string[]>([])
  const [newUsersDates, setUsersDates] = useState<string[]>([])

  useEffect(() => {
    userRepo.getUserList().then((list) => {
      setUsersList(list);
      console.log(list)
    }).catch((error) => { console.log(error) })
  }, [])

  useEffect(() => {
    statsRepo.getTransactionsPerDay().then((list) => {
      setTransactionsDates(list.map((date) => { return date.date}))
      setTransactions(list.map((transaction) => { return transaction.count}))
    }).catch((error) => { console.log(error) })
  }, [])

  useEffect(() => {
    statsRepo.getNewUsersPerDay().then((list) => {
      setUsersDates(list.map((date) => { return date.date}))
      setNewUsers(list.map((newUser) => { return newUser.count}))
    }).catch((error) => { console.log(error) })
  }, [])

  return (
    <AdminLayout>
      <div className='flex flex-col-2 px-4 w-full h-full'>
        <div className='font-bold text-primary text-3xl w-full mx-10 flex flex-col justify-center'>
          <h1>Usuarios</h1>
          <UserList list={userList} />
        </div>
        <div className='flex flex-col w-full h-full overflow-y-scroll overflow-x-clip collapse md:visible ml-20'>
        <div>
          <h1 className='font-bold text-primary text-xl'>Usuarios nuevos</h1>
          <BarChart
            data={transactions}
            labels={transactionsDates}
          />
        </div>
        <div className='my-10'>
          <h1 className='font-bold text-primary text-xl'>Transacciones al día</h1>
          <LineChart
            data={newUsers}
            labels={newUsersDates}
          />
        </div>
        <div>
        <h1 className='font-bold text-primary text-xl'>Accesos al día</h1>
          <BarChart
            data={transactions}
            labels={transactionsDates}
          />
        </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export { AdminPage };

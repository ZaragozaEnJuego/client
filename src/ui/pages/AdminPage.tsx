import { useEffect, useState } from 'react';
import { AdminLayout } from '../components/layouts';
import { BarChart, LineChart, UserList } from '../components/ui/user';
import { IAdminStatsRepo, IUserRepo, UnitsPerDay, User } from '../../core/admin/domain';
import { HTTPAdminRepo } from '../../infraestructure/http/AdminRepo';
import { HTTPAdminStatsRepo } from '../../infraestructure/http/AdminStatsRepo';

const AdminPage = () => {
  const userRepo: IUserRepo = new HTTPAdminRepo();
  const statsRepo: IAdminStatsRepo = new HTTPAdminStatsRepo()
  const [userList, setUsersList] = useState<User[]>([]);
  const [transactions, setTransactions] = useState<UnitsPerDay[]>([])
  const [newUsers, setNewUsers] = useState<UnitsPerDay[]>([])
  const [logins, setLogins] = useState<UnitsPerDay[]>([])

  useEffect(() => {
    userRepo.getUserList().then((list) => {
      setUsersList(list);
      console.log(list)
    }).catch((error) => { console.log(error) })
  }, [])

  useEffect(() => {
    statsRepo.getTransactionsPerDay().then((list) => {
      setTransactions(list)
    }).catch((error) => { console.log(error) })
  }, [])

  useEffect(() => {
    statsRepo.getNewUsersPerDay().then((list) => {
      setNewUsers(list)
    }).catch((error) => { console.log(error) })
  }, [])

    useEffect(() => {
    statsRepo.getUserLoginsPerDay().then((list) => {
      setLogins(list)
    }).catch((error) => { console.log(error) })
  }, [])

  return (
    <AdminLayout>
      <div className='flex flex-col-2 px-4 w-full h-full'>
        <div className='font-bold text-primary text-3xl w-full mx-10 flex flex-col justify-center'>
          <h1>Usuarios</h1>
          <UserList list={userList} />
        </div>
        <div className='flex flex-col w-full h-full overflow-y-scroll overflow-x-clip collapse md:visible'>
        <div>
          <h1 className='font-bold text-primary text-xl'>Usuarios nuevos</h1>
          <BarChart
            data={newUsers.map((newUser) => { return newUser.count})}
            labels={newUsers.map((newUser) => { return newUser.date})}
          />
        </div>
        <div className='my-10'>
          <h1 className='font-bold text-primary text-xl'>Transacciones al día</h1>
          <LineChart
            data={transactions.map((transaction) => { return transaction.count})}
            labels={transactions.map((transaction) => { return transaction.date})}
          />
        </div>
        <div>
        <h1 className='font-bold text-primary text-xl'>Accesos al día</h1>
          <BarChart
            data={logins.map((login) => { return login.count})}
            labels={logins.map((login) => { return login.date})}
          />
        </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export { AdminPage };

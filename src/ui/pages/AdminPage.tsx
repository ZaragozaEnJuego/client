import { useEffect, useState } from 'react'
import { AdminLayout } from '../components/layouts'
import { BarChart, DonutChart, UserList } from '../components/ui/user'
import { User } from '../../core/admin/domain'
import { HTTPAdminRepo } from '../../infraestructure/http/AdminRepo'

const AdminPage = () => {
  const userRepo: HTTPAdminRepo = new HTTPAdminRepo();
  const [userList, setUsersList] = useState<User[]>([]);

  useEffect(() => {
    userRepo.getUserList().then((list) => {
      setUsersList(list)
    })
  }, [])

  return (
    <AdminLayout>
      <div className='flex flex-col-3 px-4 w-full h-full'>
        <div className='font-bold text-primary text-3xl w-1/2 mx-10 flex flex-col justify-center'>
          <h1>Usuarios</h1>
          <UserList list={userList} />
        </div>
        <div className='w-1/4 collapse md:visible'>
          <BarChart
            data={[112, 119, 93, 145, 123, 198, 185, 230]}
            labels={['L', 'M', 'X', 'J', 'V', 'S', 'D']}
          />
        </div>
        <div className='w-1/4 collapse md:visible'>
          <DonutChart
            data={[120, 85, 73, 95]}
            labels={['transporte', 'Salud', 'Restaurantes', 'Educación']}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export { AdminPage };

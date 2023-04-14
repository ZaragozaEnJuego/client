import { useEffect, useState } from "react"
import { MemoryUserRepo } from "../../infraestructure/memory"
import { AdminLayout } from "../components/layouts"
import { BarChart, DonutChart, UserList } from '../components/ui/user'
import { Landlord } from "../../core/landlord/model"

const AdminPage = () => {
  const userRepo: MemoryUserRepo = new MemoryUserRepo(); 
  const [userList, setUsersList] = useState<Landlord[]>([]);

  useEffect(() => {
    userRepo.getAllUsers().then((list) => {
      setUsersList(list);
    });
  }, []);

  return (
      <AdminLayout>
          <div className='flex flex-col-3 px-4 w-full h-full'>
            <div className='font-bold text-primary text-3xl w-1/2 mx-10 flex flex-col justify-center'>
              <h1>Usuarios</h1>
              <UserList list={userList} />
            </div>
              <div className="w-1/4 collapse md:visible">
                <BarChart data={[112, 119, 93, 145, 123, 198, 185, 230]} labels={['L', 'M', 'X', 'J', 'V', 'S', 'D']} />
              </div>
              <div className="w-1/4 collapse md:visible">
                <DonutChart data={[120, 85, 73, 95]} labels={['Transporte', 'Salud', 'Restaurantes', 'Educación']} />
              </div>
            </div>
      </AdminLayout>
  );
}

export { AdminPage };
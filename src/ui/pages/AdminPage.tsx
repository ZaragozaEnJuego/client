import { useEffect, useState } from "react";
import { IUserRepo, User } from "../../core/user/domain";
import { MemoryUserRepo } from "../../infraestructure/memory";
import { AdminLayout } from "../components/layouts";
import { UserList } from '../components/ui/user';


const AdminPage = () => {
  const userRepo: IUserRepo = new MemoryUserRepo(); 
  const [userList, setUsersList] = useState<User[]>([]);

  useEffect(() => {
    userRepo.getAllUsers().then((list) => {
      setUsersList(list);
    });
  }, []);

  return (
      <AdminLayout>
          <div className='flex flex-col2 px-4 w-full h-full'>
            <div className='font-bold text-primary text-3xl w-full mx-10 flex flex-col justify-center'>
              <h1>Usuarios</h1>
              <UserList list={userList} />
            </div>
            <div className='flex justify-center collapse xl:visible lg:visible items-center border-2 rounded-lg border-secondary text-4xl font-bold text-hover h-full w-full'>
            <h1>CHARTS</h1>
            </div>
          </div>
      </AdminLayout>
  );
}

export { AdminPage };
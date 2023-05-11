import { useEffect, useState } from 'react'
import { AdminLayout } from '../components/layouts'
import { BarChart, DonutChart, UserList } from '../components/ui/user'
import { PropertyPurchaseData, User } from '../../core/admin/domain'
import { HTTPAdminRepo } from '../../infraestructure/http/AdminRepo'
import { HTTPAdminStatsRepo } from '../../infraestructure/http/AdminStatsRepo'
import { Propertie } from '../../core/properties/domain'
import { toast } from 'react-toastify'

const AdminPage = () => {
  const userRepo: HTTPAdminRepo = new HTTPAdminRepo()
  const adminStatsRepo: HTTPAdminStatsRepo = new HTTPAdminStatsRepo()
  const [userList, setUsersList] = useState<User[]>([])
  const [ transportProperties, setTransportProperties ] = useState<Propertie[]>([])
  const [ healthProperties, setHealthProperties ] = useState<Propertie[]>([])
  const [ educationProperties, setEducationProperties ] = useState<Propertie[]>([])
  const [ groceriesProperties, setGroceriesProperties ] = useState<Propertie[]>([])
  const [ propertyPurchases, setPropertyPurchases ] = useState<PropertyPurchaseData[]>([])

  useEffect(() => {
    adminStatsRepo
    .propertyPurchases()
    .then((list) => {
      setPropertyPurchases(list)
    }).catch((error) => {
      toast.error('Error al obtener las propiedades de transporte', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    })
  }, [])

  useEffect(() => {
    adminStatsRepo
    .getPropertiesByKind('transport')
    .then((list) => {
      setTransportProperties(list)
    }).catch((error) => {
        toast.error('Error al obtener las propiedades de transporte', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      })
  }, [])

  useEffect(() => {
    adminStatsRepo
    .getPropertiesByKind('health')
    .then((list) => {
      setHealthProperties(list)
    }).catch((error) => {
        toast.error('Error al obtener las propiedades de salud', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      })
  }, [])

  useEffect(() => {
    adminStatsRepo
    .getPropertiesByKind('education')
    .then((list) => {
      setEducationProperties(list)
    }).catch((error) => {
        toast.error('Error al obtener las propiedades de educación', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      })
  }, [])

  useEffect(() => {
    adminStatsRepo
    .getPropertiesByKind('groceries')
    .then((list) => {
      setGroceriesProperties(list)
    }).catch((error) => {
        toast.error('Error al obtener las propiedades de restauración', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
  }, []);

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
            data={[0, 0, 0, 0, 0, 0, 0]}
            labels={['L', 'M', 'X', 'J', 'V', 'S', 'D']}
          />
        </div>
        <div className='w-1/4 collapse md:visible'>
          <DonutChart
            data={[transportProperties.length, healthProperties.length, educationProperties.length, groceriesProperties.length]}
            labels={['transporte', 'Salud', 'Educación', 'Restauración']}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export { AdminPage };

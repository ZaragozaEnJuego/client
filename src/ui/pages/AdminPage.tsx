import { useEffect, useState } from 'react'
import { AdminLayout } from '../components/layouts'
import { LineChart, DonutChart, UserList } from '../components/ui/user'
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
  const transportPurchases: PropertyPurchaseData[] = []
  const healthPurchases: PropertyPurchaseData[] = []
  const educationPurchases: PropertyPurchaseData[] = []
  const groceriesPurchases: PropertyPurchaseData[] = []

  useEffect(() => {
    adminStatsRepo
    .propertyPurchases()
    .then((list) => {
      setPropertyPurchases(list)
      propertyPurchases.map((value) => {
        switch(value.kind) {
          case 'transport':
            transportPurchases.push(value)
            break;
          case 'health':
            healthPurchases.push(value)
            break;
          case 'education':
            educationPurchases.push(value)
            break;
          case 'groceries':
            groceriesPurchases.push(value)
            break;
          default:
            console.log("Tipo de propiedad erróneo")
        }
      })
    }).catch(() => {
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
    }).catch(() => {
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
    }).catch(() => {
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
    }).catch(() => {
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
    }).catch(() => {
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
        <div className='w-1/2 collapse md:visible'>
          <LineChart
            dataTransport={[10, 12, 18, 21, 23, 20, 12, 15, 18, 30, 34, 36]}
            dataHealth={[9, 5, 2, 7, 14, 7, 12, 10, 9, 9, 16, 8]}
            dataEducation={[12, 18, 13, 11, 8, 0, 0, 3, 4, 2, 6, 9]}
            dataGroceries={[20, 30, 23, 45, 58, 23, 45, 34, 33, 20, 23, 34]}
            labels={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']}
          />
        </div>
        <div className='w-1/2 collapse md:visible'>
          <DonutChart
            data={[transportProperties.length, healthProperties.length, educationProperties.length, groceriesProperties.length]}
            labels={['Transporte', 'Salud', 'Educación', 'Restauración']}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export { AdminPage };

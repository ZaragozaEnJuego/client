import { FC, PropsWithChildren, useEffect } from 'react';
import { ReactComponent as UserIcon } from '/src/assets/user-regular.svg';
import { ReactComponent as AdrressBookIcon } from '/src/assets/address-book-regular.svg';
import { ReactComponent as BuildingIcon } from '/src/assets/building-regular.svg';
import { ReactComponent as InfoIcon } from '/src/assets/circle-question-regular.svg';
import { ReactComponent as Logo } from '/src/assets/tree-city-solid.svg';

type Props = PropsWithChildren & {
  title?: string;
};

interface menuOption {
  icon: any;
  route: string;
}

const menuOptions: menuOption[] = [
  {
    icon: <BuildingIcon />,
    route: '/',
  },
  {
    icon: <UserIcon />,
    route: '/profile',
  },
  {
    icon: <AdrressBookIcon />,
    route: '/negotiation',
  },
  {
    icon: <InfoIcon />,
    route: '/about',
  },
];

const Header = () => {
  return (
    <div className='flex p-8 items-end pl-32 '>
      <Logo className='h-20 w-20 fill-primary mx-4 ' />
      <h1 className='text-6xl font-bold text-primary'>Zaragoza en juego</h1>
    </div>
  );
};
const SideBarContent = () => {
  const path = location.pathname;

  return (
    <div className='h-full flex flex-col justify-between  items-center '>
      {/*  menu */}
      <div>
        {menuOptions.map((opt, idx) => {
          return (
            <div
              key={idx}
              className={
                (path === opt.route ? 'fill-primary' : ' fill-secondary  hover:fill-hover  ') +
                'h-12 w-12 mb-12 '
              }
            >
              {opt.icon}
            </div>
          );
        })}
      </div>

      {/** profile button */}

      <button
        className='h-20 w-20 rounded-full  hover:opacity-80 '
        onClick={() => {
          console.log('Cerrar sesión');
        }}
      >
        <img
          className='w-full h-full object-cover rounded-full '
          src='https://miro.medium.com/v2/resize:fit:785/0*Ggt-XwliwAO6QURi.jpg'
        />
      </button>
    </div>
  );
};

export const MainLayout: FC<Props> = ({ children, title = 'ZarahozaEnJuego' }) => {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <div className=' w-screen h-screen bg-background '>
        {/* header*/}
        <div className='fixed'>
          <Header />
        </div>
        {/*Navbar */}
        <div className='fixed h-full w-24 pl-8 pt-36 pb-10 '>
          <SideBarContent />
        </div>
        {/**Page */}
        <div className=' h-full w-full pt-36 pl-28'>{children}</div>
      </div>
    </>
  );
};

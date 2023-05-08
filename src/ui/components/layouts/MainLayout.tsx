import { FC, PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { ReactComponent as UserIcon } from '/src/assets/user-regular.svg';
import { ReactComponent as AdrressBookIcon } from '/src/assets/address-book-regular.svg';
import { ReactComponent as BuildingIcon } from '/src/assets/building-regular.svg';
import { ReactComponent as InfoIcon } from '/src/assets/circle-question-regular.svg';
import { ReactComponent as Logo } from '/src/assets/tree-city-solid.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '/src/assets/bars-solid.svg';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { ProfileButton } from '../ui';

type Props = PropsWithChildren & {
  title?: string;
};

interface menuOption {
  icon: ReactElement;
  route: string;
  name: string;
}

const menuOptions: menuOption[] = [
  {
    icon: <BuildingIcon />,
    route: '/home',
    name: 'Home',
  },
  {
    icon: <UserIcon />,
    route: '/profile',
    name: 'Perfil',
  },
  {
    icon: <AdrressBookIcon />,
    route: '/negotiation',
    name: 'Negociaciones',
  },
  {
    icon: <InfoIcon />,
    route: '/about',
    name: 'Acerca de',
  },
];

const DesktopHeader = () => {
  return (
    <div className='flex p-8 justify-between items-end pl-32 '>
      <Logo className='h-20 w-20 fill-primary mx-4 ' />
      <h1 className='text-5xl font-bold text-primary'>Zaragoza en juego</h1>
    </div>
  );
};

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className='flex items-center w-full justify-between px-2 py-4'>
      <button onClick={toggleDrawer}>
        <MenuIcon className='h-10 w-10 fill-primary' />
      </button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction='left' size={window.innerWidth * 0.8}>
        <MobileSideBarContent />
      </Drawer>
      <h1 className='text-3xl font-bold text-primary '>Zaragoza en juego</h1>
    </div>
  );
};

const DesktopSideBarContent = () => {
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
                (path === opt.route ? 'fill-primary ' : ' fill-secondary  hover:fill-hover ') +
                ' h-8 w-8 mb-12 '
              }
            >
              <Link to={opt.route}>{opt.icon}</Link>
            </div>
          );
        })}
      </div>

      {/** profile button */}
      <ProfileButton />
    </div>
  );
};

const MobileSideBarContent = () => {
  const path = location.pathname;
  return (
    <div className='flex flex-col justify-between h-full  py-10 '>
      {/*  menu */}
      <div className='pl-4 '>
        {menuOptions.map((opt, idx) => {
          return (
            <div
              key={idx}
              className={
                (path === opt.route ? 'text-primary  ' : ' text-secondary  hover:text-hover  ') +
                'text-4xl my-4 font-bold'
              }
            >
              <Link to={opt.route}>{opt.name}</Link>
            </div>
          );
        })}
      </div>

      {/** profile button */}
      <div className='w-full flex  justify-center  '>
        <ProfileButton />
      </div>
    </div>
  );
};

const MainLayout: FC<Props> = ({ children, title = 'ZaragozaEnJuego' }) => {
  //a md window have 768 pixels
  const md = 768;

  //set html head metadata
  useEffect(() => {
    document.title = title;
  }, []);

  //state of the current windw dimension
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  //detect size of the current browser window
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  //avoid recurrennt executions of detectSize
  const [mounted, setMounted] = useState(false);

  //run each time the window dimension changes
  useEffect(() => {
    //listed al the window redimensions
    window.addEventListener('resize', detectSize);

    if (!mounted) {
      setMounted(true);
      detectSize();
    }

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [mounted, windowDimenion]);

  return (
    <>
      {windowDimenion.winWidth > md ? (
        //Desktop layout
        <div className=' w-screen h-screen bg-background '>
          {/* header*/}
          <div className='fixed'>
            <DesktopHeader />
          </div>
          {/*Navbar */}
          <div className='fixed h-full w-24 pl-8 pt-36 pb-10 '>
            <DesktopSideBarContent />
          </div>
          {/**Page */}
          <div className=' h-full w-full pt-36 pl-28'>{children}</div>
        </div>
      ) : (
        //Mobile layout
        <div className=' w-screen h-screen bg-background '>
          {/* header*/}
          <div className='fixed w-full'>
            <MobileHeader />
          </div>
          {/**Page */}
          <div className=' h-full w-full pt-24'>{children}</div>
        </div>
      )}
    </>
  );
};

export { MainLayout };

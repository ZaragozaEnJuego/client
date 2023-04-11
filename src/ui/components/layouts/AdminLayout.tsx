import { FC, PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { ReactComponent as MenuIcon } from '/src/assets/bars-solid.svg';
import { ReactComponent as Logo } from '/src/assets/tree-city-solid.svg';
import { ProfileButton } from '../ui';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

type Props = PropsWithChildren & {
    title?: string;
  };

const DesktopHeader = () => {
    return (
      <div className='flex p-8 justify-between items-end pl-32 '>
        <Logo className='h-20 w-20 fill-primary mx-4 ' />
        <h1 className='text-5xl font-bold text-primary'>Panel de administración</h1>
      </div>
    );
  };

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className='flex items-center w-full justify-between px-10 py-4'>
      <button onClick={toggleDrawer}>
        <MenuIcon className='h-10 w-10 fill-primary' />
      </button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction='left' size={window.innerWidth * 0.8}>
        <MobileSideBarContent />
      </Drawer>
      <h1 className='text-3xl font-bold text-primary '>Panel de administrador</h1>
    </div>
  );
};

const DesktopSideBarContent = () => {
    return (<div className='h-full flex flex-col justify-end  items-between'><ProfileButton /></div>);
  };

  const MobileSideBarContent = () => {
    return (<div className='w-full flex  justify-center  '><ProfileButton /></div>);
  };

const AdminLayout: FC<Props> = ({ children, title = 'Panel de administrador' }) => {
    const md = 768;
    useEffect(() => {
        document.title = title;
    }, []);

    const [windowDimension, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    });

    const detectSize = () => {
        detectHW({
          winWidth: window.innerWidth,
          winHeight: window.innerHeight,
        });
      };

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', detectSize);
    
        if (!mounted) {
          setMounted(true);
          detectSize();
        }
    
        return () => {
          window.removeEventListener('resize', detectSize);
        };
      }, [mounted, windowDimension]);

      return (
        <>
            {windowDimension.winWidth > md ? (
                <div className=' w-screen h-screen bg-background '>
                    <div className='fixed'>
                        <DesktopHeader />
                    </div>
                <div className='fixed h-full w-24 pl-8 pt-36 pb-10 '>
                    <DesktopSideBarContent />
                </div>
                <div className=' h-full w-full pt-36 pl-28'>{children}</div>
                </div>
            ) : (
                <div className=' w-screen h-screen bg-background '>
                    <div className='fixed w-full'>
                        <MobileHeader />
                    </div>
                    <div className=' h-full w-full pt-24'>{children}</div>
                </div>
            )}
        </>
      )
}

export { AdminLayout };
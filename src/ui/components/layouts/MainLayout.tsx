import { FC, PropsWithChildren } from 'react';
import { ReactComponent as User } from '/src/assets/user-regular.svg';

type Props = PropsWithChildren & {
  title?: string;
};

interface menuOption {
  icon: any;
  route: string;
}

const menuOptions: menuOption[] = [
  {
    icon: <User />,
    route: '/',
  },
  {
    icon: <User />,
    route: '/profile',
  },
  {
    icon: <User />,
    route: '/negotiation',
  },
];

const SideBarContent = () => {
  const path = location.pathname;

  return (
    <>
      <div className='w-full h-full py-20  flex flex-col justify-between  items-center '>
        {/*  menu */}
        <div className=''>
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
          className='h-20 w-20 rounded-full  '
          onClick={() => {
            console.log('Cerrar sesión');
          }}
        >
          <img
            className='w-full h-full object-cover rounded-full'
            src='https://miro.medium.com/v2/resize:fit:785/0*Ggt-XwliwAO6QURi.jpg'
          />
        </button>
      </div>
    </>
  );
};

export const MainLayout: FC<Props> = ({ children, title = 'Nmail' }) => {
  return (
    <>
      {/*Navbar */}
      <div className='fixed h-screen w-24 ml-8 bg-background '>
        <SideBarContent />

        {/* header*/}
      </div>
    </>
  );
};

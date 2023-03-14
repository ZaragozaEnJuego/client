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
      <div className='w-full   '>
        {/*  menu */}
        {menuOptions.map((opt, idx) => {
          return (
            <div key={idx} className={'text-paragraph'}>
              <button
                onClick={() => {
                  console.log(opt.route + ' clicked');
                }}
                className={
                  (path === opt.route ? 'fill-primary' : ' fill-secondary ') +
                  ' my-2  h-full py-2 rounded-lg'
                }
              >
                <div className='h-10 w-10'>{opt.icon}</div>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const MainLayout: FC<Props> = ({ children, title = 'Nmail' }) => {
  return (
    <>
      {/*Navbar */}
      <div className='fixed h-screen bg-background '>
        <SideBarContent />

        {/* header*/}
      </div>
    </>
  );
};

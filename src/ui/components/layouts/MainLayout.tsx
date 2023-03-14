import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  title?: string;
};

interface menuOption {
  icon: any;
  route: string;
}

const menuOptions: menuOption[] = [
  {
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
        {/*  Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
        <path d='M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z' />
      </svg>
    ),
    route: '/',
  },
  {
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
        {/*  Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
        <path d='M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z' />
      </svg>
    ),
    route: '/profile',
  },
  {
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
        {/*  Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
        <path d='M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z' />
      </svg>
    ),
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

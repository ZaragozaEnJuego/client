import { FC, PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { ReactComponent as Logo } from '/src/assets/Logo.svg';
import { ReactComponent as Fondo } from '/src/assets/Fondo.svg';
import 'react-modern-drawer/dist/index.css';

function LoginLayout(Button: button, title = 'ZaragozaEnJuego') {
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
        <div
          style={{
            height: '100vh',
            background: <Fondo />,
            backgroundSize: 'cover',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            <h1 style={{ color: '#2E3440' }}>{title}</h1>
            <Logo />
            <Button />
          </div>
        </div>
      ) : (
        //Mobile layout
        <div
          style={{
            height: '100vh',
            background: <Fondo />,
            backgroundSize: 'cover',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            <h1 style={{ color: '#2E3440' }}>{title}</h1>
            <Logo />
            <Button />
          </div>
        </div>
      )}
    </>
  );
}

export { LoginLayout };

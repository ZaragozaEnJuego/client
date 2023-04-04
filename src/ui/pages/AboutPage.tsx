import { MainLayout } from '../components/layouts';

const AboutPage = () => {
  return (
    <MainLayout>
      <h1 className="font-bold text-primary text-3xl">Acerca del juego</h1>
      <p className="text-black text-lg mt-4">ZARAGOZA EN JUEGO es el clásico juego de operaciones inmobiliarias, 
      consistente en hacer grandes negocios comprando el mayor número de propiedades posible.<br/><br/>
      Navega sobre el mapa o a través de la lista de propiedades y toma decisiones para comprar propiedades a la 
      banca o negocia para obtener las propiedades de otros jugadores. Tu éxito dependerá de unas inversiones inteligentes 
      y de tus dotes como negociador y, sobretodo, evita la bancarrota a cualquier precio.<br/><br/>
      ¿Serás capaz de convertirte en el propietario más poderoso?
      </p>
    </MainLayout>
  );
};

export { AboutPage };

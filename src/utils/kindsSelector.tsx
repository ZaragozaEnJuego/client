/*  Sistemas y Tecnologías Web - Fabra Caro, Francisco
*   Proyecto:                    Zaragoza en Juego 
*   Fichero:                     kindsSelector.tsx
*   Desarrolladores:             Aréjula Aísa, Íñigo                  - 785370              
*                                González Martínez de Apellániz, Ibón - 756878
*                                Ruiz Borao, Juan José                - 756640
*                                Penacho, Ismael                      - 774572
*/

import { Kind } from '../core/properties/domain';
import { ReactComponent as SchoolIcon } from '/src/assets/graduation-cap-solid.svg';
import { ReactComponent as MedicalIcon } from '/src/assets/suitcase-medical-solid.svg';
import { ReactComponent as GrocerieIcon } from '/src/assets/utensils-solid.svg';
import { ReactComponent as TrainIcon } from '/src/assets/train-solid.svg';

const chooseColor = (kind: Kind): string => {
  switch (kind) {
    case 'health':
      return '#bf616a';

    case 'groceries':
      return '#a3be8c';

    case 'education':
      return '#5E81AC';

    case 'transport':
      return '#b48ead';
    default:
      return '';
  }
};

const PropertieIcon = (kind: Kind) => {
  switch (kind) {
    case 'health':
      return <MedicalIcon style={{ fill: chooseColor(kind) }} className={'h-full  w-24 px-2 '} />;

    case 'groceries':
      return <GrocerieIcon style={{ fill: chooseColor(kind) }} className={'h-full  w-20 px-2 '} />;

    case 'education':
      return <SchoolIcon style={{ fill: chooseColor(kind) }} className={'h-full  w-24 px-2 '} />;

    case 'transport':
      return <TrainIcon style={{ fill: chooseColor(kind) }} className={'h-full  w-20 px-2 '} />;
    default:
      return <></>;
  }
};

export { chooseColor, PropertieIcon };

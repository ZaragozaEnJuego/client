import { Kind } from '../core/properties/domain';
import { ReactComponent as SchoolIcon } from '/src/assets/graduation-cap-solid.svg';
import { ReactComponent as MedicalIcon } from '/src/assets/suitcase-medical-solid.svg';
import { ReactComponent as GrocerieIcon } from '/src/assets/utensils-solid.svg';
import { ReactComponent as TrainIcon } from '/src/assets/train-solid.svg';

const chooseColor = (kind: Kind): string => {
  switch (kind) {
    case 'Health':
      return '#5E81AC';

    case 'Groceries':
      return '#a3be8c';

    case 'Education':
      return '#bf616a';

    case 'Transport':
      return '#b48ead';
    default:
      return '';
  }
};

const PropertieIcon = (kind: Kind) => {
  switch (kind) {
    case 'Health':
      return <MedicalIcon style={{ fill: chooseColor(kind) }} className={'h-full  w-24 px-2 '} />;

    case 'Groceries':
      return <GrocerieIcon style={{ fill: chooseColor(kind) }} className={'h-full  w-20 px-2 '} />;

    case 'Education':
      return <SchoolIcon style={{ fill: chooseColor(kind) }} className={'h-full  w-24 px-2 '} />;

    case 'Transport':
      return <TrainIcon style={{ fill: chooseColor(kind) }} className={'h-full  w-20 px-2 '} />;
    default:
      return <></>;
  }
};

export { chooseColor, PropertieIcon };

/*  Sistemas y Tecnologías Web - Fabra Caro, Francisco
*   Proyecto:                    Zaragoza en Juego 
*   Fichero:                     SmallUserOfferCard.tsx
*   Desarrolladores:             Aréjula Aísa, Íñigo                  - 785370              
*                                González Martínez de Apellániz, Ibón - 756878
*                                Ruiz Borao, Juan José                - 756640
*                                Penacho, Ismael                      - 774572
*/

import { FC } from 'react';
import { Offer } from '../../../../core/negotiations/domain';

interface Offers {
    offer: Offer;
}

const SmallUserOfferCard: FC<Offers> = ({ offer }) => {
    return (
        <div style={{ background: '#8FBCBB' }} className='flex flex-col-3 justify-center items-top border w-full rounded-3xl py-2 px-4 my-4 h-100'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-xs text-nord1' >Lucía</h1>
            <h1 style={{ background: '#8FBCBB' }} className={'w-50 font-bold text-sm'}>{offer.amount}€</h1>
          </div>
          <div className='flex items-center justify-top mt-4 mx-4 flex-col'>
            <div className='flex flex-col items-center px-5 py-1 w-full'>
            <button className='items-center text-xs text-hover py-1 my-1 w-20 rounded-lg mx-2 bg-primary'
                onClick={() => { alert('Oferta cancelada');}}>Cancelar</button>
            <button style={{ background: '#8FBCBB', color: '#8FBCBB'}} className='items-center text-xs cursor-default py-1 my-1 w-20 rounded-lg mx-2'>Consultar</button>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-xs text-nord1' >Tú</h1>
            <h1 className='w-50 text-sm font-bold text-primary'>Estación Delicias</h1>
          </div>
        </div>
      );
}

export { SmallUserOfferCard }
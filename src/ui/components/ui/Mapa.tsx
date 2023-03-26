import React, { FC, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Propertie } from '../../../core/properties/domain';

type Sizes = 'small' | 'regular';

interface Props {
    list: Propertie[];
    size?: Sizes;
}

const propiedad = {
    name: 'Propiedad 1',
    id: '1',
    address: 'Avenida academia nº12',
    price: 240000,
    kind: 'Health',
    latitude: 41.6488,
    longitude: -0.8891,
  };

const Mapa: FC<Props> = ({ list }) => {
    
    const renderMarkers = () => {
        return list.map((propiedad) => (
          <Marker key={propiedad.id} position={[propiedad.latitude, propiedad.longitude]}>
            <Popup>
              <div>
                <h2>{propiedad.name}</h2>
                <p>{propiedad.address}</p>
                <p>{propiedad.price}</p>
                <p>{propiedad.kind}</p>
              </div>
            </Popup>
          </Marker>
        ));
      };

  return (
    <div className='w-full overflow-x-clip pr-2 h-full '>
      <MapContainer
        center={[41.6488, -0.8891]}
        zoom={13}
        scrollWheelZoom={false}
        className='w-full overflow-x-clip pr-2 h-full '
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        {/**renderMarkers()*/}
        <Marker position={[propiedad.latitude, propiedad.longitude]}>
            <Popup>
            <div>
                <h2>{propiedad.name}</h2>
                <p>{propiedad.address}</p>
                <p>{propiedad.price}</p>
                <p>{propiedad.kind}</p>
            </div>
            </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export { Mapa };

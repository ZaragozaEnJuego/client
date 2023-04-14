import React, { FC, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Propertie } from '../../../core/properties/domain';

type Sizes = 'small' | 'regular';

interface Props {
  list: Propertie[];
  size?: Sizes;
}

const Mapa: FC<Props> = ({ list }) => {
  const center = [41.6488, -0.8891];

  list.forEach((element) => {
    console.log(element.longitude);
  });
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
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        className='w-full overflow-x-clip pr-2 h-full '
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        {renderMarkers()}
      </MapContainer>
    </div>
  );
};

export { Mapa };
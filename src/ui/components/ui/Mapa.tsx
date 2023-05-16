import React, { FC, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Propertie } from '../../../core/properties/domain';
import L from 'leaflet';
import { NavLink } from 'react-router-dom';

type Sizes = 'small' | 'regular';

interface Props {
  list: Propertie[];
  size?: Sizes;
}
// Personalizar el icono predeterminado de Leaflet
const blueIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.6.0/images/marker-icon.png',
  iconSize: [38, 38],
  iconAnchor: [19, 38],
});
const Mapa: FC<Props> = ({ list }) => {
  const center = L.latLng([41.6488, -0.8891]);

  const renderMarkers = () => {
    return list.map((propiedad) => (
      <Marker icon={blueIcon} key={propiedad.id} position={[propiedad.lat, propiedad.lng]}>
        <Popup>
          <div>
            <h2>{propiedad.name}</h2>
            <p>{propiedad.address}</p>
            <p>{propiedad.price}€</p>
            <p>{propiedad.kind}</p>
            <NavLink to={`/propertie/${propiedad.id}`}>Ver más</NavLink>
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

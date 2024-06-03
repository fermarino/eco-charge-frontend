import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './ClientHome.css';
import L from 'leaflet';
import chargingPointIcon from '../../images/chargingPointMap.svg';
import carImage from '../../images/volvo-31.png';

const ClientHome = () => {
  const [selectedStation, setSelectedStation] = useState(null);

  const stations = [
    {
      id: 1,
      name: "Cafeteria Paço Alfandega",
      description: "Somos uma cafeteria que oferece um ponto de recarga para carros elétricos, promovendo uma imagem eco-friendly.",
      address: "R. Alfândega, 35 - Recife",
      latitude: -8.0625,
      longitude: -34.8711,
      cars: ["Volvo S90", "Volvo S90", "Volvo S90", "Volvo S90", "Volvo S90"],
    },
  ];

  const handleMarkerClick = (station) => {
    setSelectedStation(station);
  };

  const position = [-8.0649, -34.8711]; // Coordenadas de Recife, Brasil

  const customMarker = new L.Icon({
    iconUrl: chargingPointIcon,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
  });

  return (
    <div className="client-home-container">
      <header className="header">
        <div className="menu-icon">&#9776;</div>
        <input type="text" placeholder="Informe o destino" className="search-input" />
        <div className="profile-icon">&#128100;</div>
      </header>
      <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {stations.map((station) => (
          <Marker
            key={station.id}
            position={[station.latitude, station.longitude]}
            icon={customMarker}
            eventHandlers={{ click: () => handleMarkerClick(station) }}
            className={selectedStation === station ? "selected-marker" : ""}
          >
            <Popup className="desktop-popup">
              <div className="popup-content">
                <h2>{station.name}</h2>
                <p>{station.description}</p>
                <p><strong>Endereço:</strong> {station.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="details-container">
        {selectedStation ? (
          <>
            <h2>{selectedStation.name}</h2>
            <p>{selectedStation.description}</p>
            <p><strong>Endereço:</strong> {selectedStation.address}</p>
          </>
        ) : (
          <p>Vamos lá! Escolha o ponto de recarga e o seu veículo para iniciar.</p>
        )}
        <h3>Selecione o seu Veículo</h3>
        <div className="car-selection-container">
          <div className="car-selection">
            {stations[0].cars.map((car, index) => (
              <div key={index} className="car-wrapper">
                <img src={carImage} alt={car} />
                <p className="car-name">{car}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientHome;
